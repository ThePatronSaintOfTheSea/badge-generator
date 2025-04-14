import { Component } from '@angular/core';
import {BadgeCreatorComponent} from '../badge-creator/badge-creator.component';

@Component({
  selector: 'app-main',
  imports: [BadgeCreatorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
