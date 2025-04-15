import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { FormBuilderService } from './form-builder.service';
import {ConfigSection} from './globals';
import { HttpClient } from '@angular/common/http';
import {ConfigSectionComponent} from './config-section/config-section.component';
import {NgForOf, NgIf} from '@angular/common';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormsModule,
    ConfigSectionComponent,
    NgForOf,
    NgIf
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <app-config-section
        *ngFor="let section of config"
        [section]="section"
        [formGroup]="asFormGroup(form.get(section.id.toString()))"
      ></app-config-section>

      <button type="submit">Submit</button>
    </form>
    <div>
      <h2>Generated Image</h2>
      <img *ngIf="imageUrl" [src]="imageUrl" alt="Generated Image" />
    </div>
  `
})
export class AppComponent implements OnInit {
  config: ConfigSection[] = []; // Same config as before
  form: FormGroup = new FormGroup({});
  imageUrl: string = '';
  constructor(private formBuilder: FormBuilderService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<ConfigSection[]>("http://127.0.0.1:8000/config").subscribe(response => {
      this.config = response;
      const group: any = {};
      this.config.forEach(section => {
        group[section.id.toString()] = this.formBuilder.buildForm(section);
      });
      this.form = new FormGroup(group);
      console.log(this.form)
      this.form.valueChanges.pipe(debounceTime(300)).subscribe(() => this.onSubmit());
    })
  }

  onSubmit() {
    const result = this.form.value;
    console.log('Form object:', this.form);
    console.log('Form value:', this.form.value);

    // POST to backend
    this.httpClient.post('http://127.0.0.1:8000/generate', result, { responseType: 'blob' }).subscribe(res => {
      // console.log('Saved:', res);
      this.imageUrl = URL.createObjectURL(res);
    });
  }

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
}
