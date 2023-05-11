import { Component, Input } from '@angular/core';
import { ISlots } from '../model/slots.interface';

@Component({
  selector: 'app-weekly-slots',
  templateUrl: './weekly-slots.component.html',
  styleUrls: ['./weekly-slots.component.css']
})
export class WeeklySlotsComponent {
  @Input() slots!:ISlots;

}
