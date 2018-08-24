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
import { GameLevelPipe } from './pipes/game-level.pipe';
import { GameHomeAwayPipe } from './pipes/game-home-away.pipe';
import { GameTypePipe } from './pipes/game-type.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { ScheduleAddComponent } from './components/schedule/schedule-add/schedule-add.component';
import { TimePipe } from './pipes/time.pipe';
import { CoachesEditComponent } from './components/coaches/coaches-edit/coaches-edit.component';

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
    ScheduleEditComponent,
    HomeComponent,
    ScheduleAddComponent,
    TimePipe,
    CoachesEditComponent
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
