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


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    CoachesComponent,
    RosterComponent,
    TrainersComponent,
    DocumentsComponent,
    LoginComponent,
    NavbarComponent
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
