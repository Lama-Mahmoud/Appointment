import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyViewComponent } from './component/monthly-view/monthly-view.component';
import { WeeklyViewComponent } from './component/weekly-view/weekly-view.component';
import { DailyViewComponent } from './component/daily-view/daily-view.component';

const routes: Routes = [
  {path:"",component:MonthlyViewComponent},
  {path:"weekly",component:WeeklyViewComponent},
  {path:"daily",component:DailyViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
