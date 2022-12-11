import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-routing-sub1',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>sub1 works!</p> `,
  styleUrls: ['./sub1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sub1Component {}
