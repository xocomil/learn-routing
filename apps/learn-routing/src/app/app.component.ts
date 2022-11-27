import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@Component({
  selector: 'learn-routing-root',
  standalone: true,
  template: `
    <div class="header"><learn-routing-header></learn-routing-header></div>
    <div class="nav"><learn-routing-side-nav></learn-routing-side-nav></div>
    <div class="router-outlet"><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterOutlet, SideNavComponent],
})
export class AppComponent {
  title = 'learn-routing';
}
