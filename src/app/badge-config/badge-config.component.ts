import {Component, Input} from '@angular/core';
import {ConfigSectionComponent} from '../config-section/config-section.component';
import {AbstractControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {BadgeConfig} from '../globals';

@Component({
  selector: 'app-badge-config',
  imports: [
    ConfigSectionComponent,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './badge-config.component.html',
  styleUrl: './badge-config.component.scss'
})
export class BadgeConfigComponent {
  @Input() formGroup: FormGroup;
  @Input() config: BadgeConfig;

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
}
