import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CanActiveAdminService } from './app/services/can-active-admin.service';

const routes: Route[] = [
  {
    path: 'components',
    loadChildren: () =>
      import('./app/components/side-nav/routers').then(
        (route) => route.COMPONENT_ROUTES
      ),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./app/components/admin/admin.component').then(
        (route) => route.AdminComponent
      ),
    providers: [CanActiveAdminService],
    canActivate: [CanActiveAdminService],
  },
  {
    path: '**',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });
