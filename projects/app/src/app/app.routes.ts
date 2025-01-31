import { Routes } from '@angular/router';
import { MainLayoutComponent } from 'shared';

export const routes: Routes = [
  {
    path: 'users',
    component: MainLayoutComponent,
    loadChildren: () => import('users').then((m) => m.usersRoutes),
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('customers').then((m) => m.customerRoutes),
  },
];
