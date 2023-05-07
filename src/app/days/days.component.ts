import { Component, Input } from '@angular/core';
import { jsonaday } from '../model/jsonaday.intrface';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  @Input() day!:jsonaday;

}
