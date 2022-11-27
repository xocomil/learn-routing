import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { catchError, defer, EMPTY, map, retry } from 'rxjs';
import { AppComponent } from './app/app.component';
import { CanActiveAdminService } from './app/services/can-active-admin.service';

const routes: Route[] = [
  {
    path: 'components',
    loadChildren: () =>
      defer(() => import('./app/components/side-nav/routers')).pipe(
        map((route) => route.COMPONENT_ROUTES),
        retry(3),
        catchError((err) => {
          console.error(`Couldn't load components`, err);

          return EMPTY;
        })
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
