import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'learn-routing-side-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <ul>
      <li>
        <a [routerLink]="['components', 'component-one']">Component 1</a>
      </li>
      <li>
        <a [routerLink]="['components', 'component-two']">Component 2</a>
      </li>
      <li>
        <a [routerLink]="['components', 'component-three']">Component 3</a>
      </li>
      <li><input type="checkbox" [(ngModel)]="hasAdmin" /> Give me admin</li>
      <li><a [routerLink]="['admin']">Admin</a></li>
    </ul>
  `,
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  #adminService = inject(AdminService);

  get hasAdmin(): boolean {
    return this.#adminService.hasAdmin;
  }
  set hasAdmin(value: boolean) {
    this.#adminService.hasAdmin = value;
  }
}
