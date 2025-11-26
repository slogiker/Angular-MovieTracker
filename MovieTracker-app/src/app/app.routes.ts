import { Routes } from '@angular/router';
import { ContentComponent } from './components/content/content';

export const routes: Routes = [
	{ path: '', component: ContentComponent },
	{ path: 'movies', component: ContentComponent },
	// Auth routes will point to components we will add
	{ path: 'login', loadComponent: () => import('./auth/login/login.component').then(c => c.LoginComponent) },
	{ path: 'register', loadComponent: () => import('./auth/register/register.component').then(c => c.RegisterComponent) },
	{ path: '**', redirectTo: '' }
];
