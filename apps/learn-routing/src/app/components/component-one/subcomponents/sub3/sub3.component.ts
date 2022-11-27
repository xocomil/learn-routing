import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-routing-sub3',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>sub3 works!</p> `,
  styleUrls: ['./sub3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sub3Component {}
