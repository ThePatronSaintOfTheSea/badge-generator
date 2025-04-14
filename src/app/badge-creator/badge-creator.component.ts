import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SSelectSection, BoolSection, ConfigSection} from '../globals';
import {NgForOf} from '@angular/common';
import {SectionRendererComponent} from '../section-renderer/section-renderer.component';



@Component({
  selector: 'app-badge-creator',
  imports: [FormsModule, ReactiveFormsModule, NgForOf, SectionRendererComponent],
  templateUrl: './badge-creator.component.html',
  styleUrl: './badge-creator.component.scss'
})
export class BadgeCreatorComponent implements OnInit {

  config: ConfigSection[] = [];
  form: FormGroup;


  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.form = this.createFormGroup(this.config);
    console.log(this.form);
    this.httpClient.get<ConfigSection[]>("http://127.0.0.1:8000/config").subscribe(response => {
      console.log(response);
      this.config = response;
    })
  }

  private createFormGroup(sections: (ConfigSection | BoolSection | SSelectSection)[]): FormGroup {
    const group = this.fb.group({});
    sections.forEach(section => {
      if ("section" in section) {
        group.addControl(section.id.toString(), this.createFormGroup(section.section));
      }
    });
    return group;
  }

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
  // protected readonly FormGroup = FormGroup;
}
