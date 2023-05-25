import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-doctors-time',
  templateUrl: './doctors-time.component.html',
  styleUrls: ['./doctors-time.component.css']
})
export class DoctorsTimeComponent
{
  @Input() selectedDate: string = '';

  timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

}
