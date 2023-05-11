import { Component, ElementRef, Input, OnInit, asNativeElements } from '@angular/core';
import { jsonaday } from '../model/jsonaday.intrface';
import { DentistryappintmentDayList } from '../model/appointmentDay';
import { ITime } from '../model/time.interface';
import { DaysComponent } from '../days/days.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

}
