import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'learn-routing-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!hasAdmin">HACKER!!! You shouldn't be here!</div>
    <p>admin works!</p>
  `,
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  #adminService = inject(AdminService);

  hasAdmin = this.#adminService.hasAdmin;
}
