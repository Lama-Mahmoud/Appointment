import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent 
{

  @Output() dateChange: EventEmitter<string> = new EventEmitter<string>();
  currentDate: Date = new Date();

  
  selectDate(date: Date) 
  {
    const formattedDate = this.formatDate(date);
    this.dateChange.emit(formattedDate);
  }
  
  goToPreviousDay()
  {
    const previousDay = new Date(this.currentDate);
    previousDay.setDate(previousDay.getDate() - 1);
    this.currentDate = previousDay;
    this.selectDate(previousDay);
  }
  goToNextDay() 
  {
    const nextDay = new Date(this.currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
    this.currentDate = nextDay;
    this.selectDate(nextDay);
  }

  private formatDate(date: Date): string
  {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = (date.getDate()).toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  
}

