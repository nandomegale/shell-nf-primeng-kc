import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'remote',
    loadComponent: () => loadRemoteModule('remote-nf-primeng-kc', './Component').then((m) => m.App),
  },
];
