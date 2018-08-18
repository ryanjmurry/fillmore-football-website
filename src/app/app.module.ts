import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CoachesComponent } from './coaches/coaches.component';
import { RosterComponent } from './roster/roster.component';
import { TrainersComponent } from './trainers/trainers.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

import { GameLevelPipe } from './game-level.pipe';
import { ScheduleFilterByLevelComponent } from './schedule-filter-by-level/schedule-filter-by-level.component';
import { ScheduleFilterByLocationComponent } from './schedule-filter-by-location/schedule-filter-by-location.component';



@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CoachesComponent,
    RosterComponent,
    TrainersComponent,
    DocumentsComponent,
    LoginComponent,
    NavbarComponent,
    ScheduleListComponent,
    GameLevelPipe,
    ScheduleFilterByLevelComponent,
    ScheduleFilterByLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
