import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleEditComponent } from './components/schedule/schedule-edit/schedule-edit.component';
import { ScheduleAddComponent } from './components/schedule/schedule-add/schedule-add.component';
import { CoachesComponent } from './components/coaches/coaches.component';
import { CoachesAddComponent } from './components/coaches/coaches-add/coaches-add.component';

const appRoutes: Routes = [ 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'schedule/add',
    component: ScheduleAddComponent
  },
  {
    path: 'coaches',
    component: CoachesComponent
  },
  {
    path: 'coaches/add',
    component: CoachesAddComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);