import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-time-slots',
  templateUrl: './time-slots.component.html',
  styleUrls: ['./time-slots.component.css']
})
export class TimeSlotsComponent 
{
  @Input() timeSlots!: string[];
 
}
