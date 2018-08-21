import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

const appRoutes: Routes = [ 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);