import {Component, OnInit} from '@angular/core';
import {ConfigSectionComponent} from "../config-section/config-section.component";
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ConfigSection, BadgeConfig} from '../globals';
import {FormBuilderService} from '../form-builder.service';
import {HttpClient} from '@angular/common/http';
import {debounceTime} from 'rxjs';
import {BadgeConfigComponent} from '../badge-config/badge-config.component';

@Component({
  selector: 'app-working-field',
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    BadgeConfigComponent
  ],
  templateUrl: './working-field.component.html',
  styleUrl: './working-field.component.scss'
})
export class WorkingFieldComponent implements OnInit {
  serverUrl = "http://127.0.0.1:8003/"
  configs: BadgeConfig[] = [];
  forms: FormGroup[] = [];
  imageUrls: string[] = [];
  constructor(private formBuilder: FormBuilderService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<BadgeConfig[]>(this.serverUrl + "badge-generator/configs", {params: {rank: "Котенок"}}).subscribe(response => {
      this.configs = response;
      this.configs.forEach((config, idx) => {
        const formGroup = new FormGroup({});
        formGroup.addControl("id", new FormControl(config.id));
        config.section.forEach(section => {
          formGroup.addControl(section.id.toString(), this.formBuilder.buildForm(section))
        });

        this.forms.push(formGroup);
        this.imageUrls.push('');

        formGroup.valueChanges.pipe(debounceTime(300)).subscribe(() => this.onSubmit(formGroup, idx));
        this.onSubmit(formGroup, idx)

      });
    })
  }

  onSubmit(form: FormGroup, imageIdx: number) {
    const result = form.value;
    console.log('Form object:', form);
    console.log('Form value:', form.value);

    this.httpClient.post(this.serverUrl + 'badge-generator/generate', result, { responseType: 'blob' }).subscribe(res => {
      this.imageUrls[imageIdx] = URL.createObjectURL(res);
    });
  }

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
}
