import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './component/days/days.component';
import { SlotsComponent } from './component/slots/slots.component';
import { DaySlotsComponent } from './component/day-slots/day-slots.component';
import { DroplistComponent } from './component/droplist/droplist.component';
import { FormComponent } from './component/form/form.component';
import { MonthlyViewComponent } from './component/monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './component/weekly-view/weekly-view.component';
import { WeeklySlotsComponent } from './component/weekly-slots/weekly-slots.component';
import { PreDayComponent } from './component/pre-day/pre-day.component';
import { DatePipe } from '@angular/common';
import { DailyViewComponent } from './component/daily-view/daily-view.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { DoctorsTimeComponent } from './component/doctors-time/doctors-time.component';
import { TimeSlotsComponent } from './component/time-slots/time-slots.component';


@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    SlotsComponent,
    DroplistComponent,
    FormComponent,
    MonthlyViewComponent,
    WeeklyViewComponent,
    DaySlotsComponent,
    WeeklySlotsComponent,
    PreDayComponent,
    DailyViewComponent,
    CalendarComponent,
    DoctorsComponent,
    DoctorsTimeComponent,
    TimeSlotsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
