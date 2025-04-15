import { Component, OnInit } from '@angular/core';
import {WorkingFieldComponent} from './working-field/working-field.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    WorkingFieldComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
