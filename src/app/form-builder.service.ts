import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoolSection, ConfigSection, SSelectSection } from './globals';
import {isBoolSection, isSSelectSection, isConfigSection} from './globals';

@Injectable({ providedIn: 'root' })
export class FormBuilderService {
  buildForm(section: ConfigSection): FormGroup {
    const formGroup = new FormGroup({});
    section.section.forEach(item => {
      if (isBoolSection(item)) {
        formGroup.addControl(item.id.toString(), new FormControl(item.default))
      } else if (isSSelectSection(item)) {
        formGroup.addControl(item.id.toString(), new FormControl(item.default))
      } else if (isConfigSection(item)) {
        formGroup.addControl(item.id.toString(), this.buildForm(item));
      }
    });


    return formGroup;
  }
}
