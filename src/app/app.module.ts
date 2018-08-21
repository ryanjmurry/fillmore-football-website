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
import { ScheduleFilterByLevelComponent } from './schedule-filter-by-level/schedule-filter-by-level.component';
import { ScheduleFilterByHomeAwayComponent } from './schedule-filter-by-home-away/schedule-filter-by-home-away.component';
import { ScheduleFilterByTypeComponent } from './schedule-filter-by-type/schedule-filter-by-type.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

import { GameLevelPipe } from './game-level.pipe';
import { GameHomeAwayPipe } from './game-home-away.pipe';
import { GameTypePipe } from './game-type.pipe';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
};

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
    ScheduleFilterByHomeAwayComponent,
    GameHomeAwayPipe,
    ScheduleFilterByTypeComponent,
    GameTypePipe,
    ScheduleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
