import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'learn-routing-component-two',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>component-two works!</p> `,
  styleUrls: ['./component-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwoComponent {}
