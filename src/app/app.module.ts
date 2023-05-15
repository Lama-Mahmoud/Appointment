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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
