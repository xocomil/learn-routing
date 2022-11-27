import { Route } from '@angular/router';
import { defer, map, retry } from 'rxjs';

export const COMPONENT_ROUTES: Route[] = [
  {
    path: 'component-one',

    loadComponent: () => import('../component-one/component-one.component'),
    loadChildren: () =>
      defer(() => import('../component-one/component-one.routes')).pipe(
        map((routes) => routes.COMPONENT_ONE_ROUTES),
        retry(3)
      ),
  },
  {
    path: 'component-two',
    loadComponent: () =>
      import('../component-two/component-two.component').then(
        (component) => component.ComponentTwoComponent
      ),
  },
  {
    path: 'component-three',
    loadComponent: () =>
      import('../component-three/component-three.component').then(
        (component) => component.ComponentThreeComponent
      ),
  },
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
];
