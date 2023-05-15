import { Component, Input } from '@angular/core';
import { IDayNumber } from 'src/app/data/daynumber';

@Component({
  selector: 'app-pre-day',
  templateUrl: './pre-day.component.html',
  styleUrls: ['./pre-day.component.css']
})
export class PreDayComponent {
  @Input() day!:IDayNumber;
}
