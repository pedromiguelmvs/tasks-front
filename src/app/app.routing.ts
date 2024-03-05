import { Route } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';


export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
    ],
  },
  { path: '-', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    canActivate: [NoAuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'registrar',
        loadChildren: () =>
          import('./modules/auth/sign-up/sign-up.module').then(
            (m) => m.AuthSignUpModule
          ),
      },
    ],
  },
  {
    path: '',
    canMatch: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'sidebar',
    },
    children: [
      {
        path: 'dashboard',
        canMatch: [AuthGuard],
        data: {
          title: 'Dashboard',
          menuKey: 'DASHBOARD',
        },
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];
