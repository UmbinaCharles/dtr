import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailytimerecordComponent } from './dailytimerecord/dailytimerecord.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampletabComponent} from './attendance/sampletab.component';
import { ReportComponent } from './report/report.component';
import { ManageComponent } from './manage/manage.component';
import { PositionsComponent } from './positions/positions.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrintablesComponent } from './printables/printables.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DeleteComponent } from './delete/delete.component'; 

const routes: Routes = [
  { path:'', component:DailytimerecordComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'attendance', component:SampletabComponent},
  { path:'report', component:ReportComponent},
  { path:'manage', component:ManageComponent},
  { path:'positions', component:PositionsComponent},
  { path:'employees', component:EmployeesComponent},
  { path:'printables', component:PrintablesComponent},
  { path:'schedule', component:ScheduleComponent},
  { path:'delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
