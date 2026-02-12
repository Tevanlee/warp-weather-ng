import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page').then((h) => h.HomePage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
