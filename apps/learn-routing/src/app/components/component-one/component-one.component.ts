import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'learn-routing-component-one',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="tab-container">
      <div class="tab"><a routerLink="sub1">Sub 1</a></div>
      <div class="tab"><a routerLink="sub2">Sub 2</a></div>
      <div class="tab"><a routerLink="sub3">Sub 3</a></div>
    </div>
    <div class="content-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./component-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentOneComponent {}
