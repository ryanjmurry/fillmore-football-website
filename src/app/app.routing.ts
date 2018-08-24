import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

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
    path: 'schedule/edit/:id',
    component: ScheduleEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);