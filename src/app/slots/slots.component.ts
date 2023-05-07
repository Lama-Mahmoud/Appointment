import { Component, Input } from '@angular/core';
import { ITime } from '../model/time.interface';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent {
  @Input() time! :ITime;
  openDialog(){
  }
}
