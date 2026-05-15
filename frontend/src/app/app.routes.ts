import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services/:id', component: ServicesDetailComponent },
  { path: '**', redirectTo: 'login' }
];
