import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-routing-sub2',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>sub2 works!</p> `,
  styleUrls: ['./sub2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sub2Component {}
