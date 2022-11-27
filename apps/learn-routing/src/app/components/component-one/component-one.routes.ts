import { Route } from '@angular/router';
import { defer, map, retry } from 'rxjs';

export const COMPONENT_ONE_ROUTES: Route[] = [
  {
    path: 'sub1',
    loadComponent: () =>
      defer(() => import('./subcomponents/sub1/sub1.component')).pipe(
        map((component) => component.Sub1Component),
        retry(3)
      ),
  },
  {
    path: 'sub2',
    loadComponent: () =>
      defer(() => import('./subcomponents/sub2/sub2.component')).pipe(
        map((component) => component.Sub2Component),
        retry(3)
      ),
  },
  {
    path: 'sub3',
    loadComponent: () =>
      defer(() => import('./subcomponents/sub3/sub3.component')).pipe(
        map((component) => component.Sub3Component),
        retry(3)
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sub1',
  },
];
