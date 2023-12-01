import { Routes } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, title: 'Hive-D | Login' },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Hive-D | Register',
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
