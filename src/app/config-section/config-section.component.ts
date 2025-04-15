import { Component, Input } from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ConfigSection, BoolSection, SSelectSection } from '../globals';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-config-section',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './config-section.component.html'
})
export class ConfigSectionComponent {
  @Input() section!: ConfigSection;
  @Input() formGroup!: FormGroup;

  isBool(item: any): item is BoolSection {
    return item.type === 'bool';
  }

  isSSelect(item: any): item is SSelectSection {
    return item.type === 'sselect';
  }

  isNestedSection(item: any): item is ConfigSection {
    return item.type === 'section';
  }

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }
}
