import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailytimerecordComponent } from './dailytimerecord/dailytimerecord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { SampletabComponent } from './attendance/sampletab.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ReportComponent } from './report/report.component';
import { ManageComponent } from './manage/manage.component';
import { PositionsComponent } from './positions/positions.component';
import { EmployeesComponent } from './employees/employees.component';
import { PrintablesComponent } from './printables/printables.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DailytimerecordComponent,
    SampletabComponent,
    ReportComponent,
    ManageComponent,
    PositionsComponent,
    EmployeesComponent,
    PrintablesComponent,
    ScheduleComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
