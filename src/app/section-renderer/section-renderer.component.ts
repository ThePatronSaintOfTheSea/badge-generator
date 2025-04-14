// section-renderer.component.ts
import { Component, Input } from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {BoolSection, SSelectSection, ConfigSection} from '../globals';
import {isBoolSection, isSSelectSection, isConfigSection} from '../globals';


@Component({
  selector: 'app-section-renderer',
  imports: [
    NgForOf,
    NgSwitch,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './section-renderer.component.html'
})
export class SectionRendererComponent {
  @Input() section: Array<BoolSection | SSelectSection | ConfigSection>;
  @Input() parentForm: FormGroup<any>;

  asFormGroup(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }

  protected readonly isBoolSection = isBoolSection;
  protected readonly isSSelectSection = isSSelectSection;
  protected readonly isConfigSection = isConfigSection;
}
