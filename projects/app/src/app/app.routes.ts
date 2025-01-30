import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../shared/src/infrastructure/ui/routes/shared.routes').then(
        (m) => m.sharedRoutes
      ),
  },
  {
    path: 'users',
    loadChildren: () => import('users').then((m) => m.usersRoutes),
  },
];
