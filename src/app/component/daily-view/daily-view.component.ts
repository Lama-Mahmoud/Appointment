import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css']
})
export class DailyViewComponent {

  @Output() dateChange = new EventEmitter<string>();
  selectedDate: string = '';

  handleDateChange(date: string) 
  {
    this.selectedDate = date;
  }
  
  
}
