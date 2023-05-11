import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DaysComponent } from './days/days.component';
import { SlotsComponent } from './slots/slots.component';
import { DroplistComponent } from './droplist/droplist.component';
import { FormComponent } from './form/form.component';
import { MonthlyViewComponent } from './monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    DaysComponent,
    SlotsComponent,
    DroplistComponent,
    FormComponent,
    MonthlyViewComponent,
    WeeklyViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
