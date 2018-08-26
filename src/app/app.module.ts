import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { RosterComponent } from './components/roster/roster.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleListComponent } from './components/schedule/schedule-list/schedule-list.component';
import { ScheduleFilterByLevelComponent } from './components/schedule/schedule-filter-by-level/schedule-filter-by-level.component';
import { ScheduleFilterByHomeAwayComponent } from './components/schedule/schedule-filter-by-home-away/schedule-filter-by-home-away.component';
import { ScheduleFilterByTypeComponent } from './components/schedule/schedule-filter-by-type/schedule-filter-by-type.component';
import { ScheduleEditComponent } from './components/schedule/schedule-edit/schedule-edit.component';
import { GameHomeAwayPipe } from './pipes/game-home-away.pipe';
import { GameTypePipe } from './pipes/game-type.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { ScheduleAddComponent } from './components/schedule/schedule-add/schedule-add.component';
import { TimePipe } from './pipes/time.pipe';
import { CoachesEditComponent } from './components/coaches/coaches-edit/coaches-edit.component';
import { CoachesAddComponent } from './components/coaches/coaches-add/coaches-add.component';
import { RosterAddComponent } from './components/roster/roster-add/roster-add.component';
import { RosterEditComponent } from './components/roster/roster-edit/roster-edit.component';
import { LevelPipe } from './pipes/level.pipe';
import { CoachesFilterByLevelComponent } from './components/coaches/coaches-filter-by-level/coaches-filter-by-level.component';
import { RosterFilterByLevelComponent } from './components/roster/roster-filter-by-level/roster-filter-by-level.component';

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
    ScheduleFilterByLevelComponent,
    ScheduleFilterByHomeAwayComponent,
    GameHomeAwayPipe,
    ScheduleFilterByTypeComponent,
    GameTypePipe,
    ScheduleEditComponent,
    HomeComponent,
    ScheduleAddComponent,
    TimePipe,
    CoachesEditComponent,
    CoachesAddComponent,
    RosterAddComponent,
    RosterEditComponent,
    LevelPipe,
    CoachesFilterByLevelComponent,
    RosterFilterByLevelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
