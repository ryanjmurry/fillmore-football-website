import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CoachesComponent } from './coaches/coaches.component';
import { RosterComponent } from './roster/roster.component';
import { TrainersComponent } from './trainers/trainers.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CoachesComponent,
    RosterComponent,
    TrainersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
