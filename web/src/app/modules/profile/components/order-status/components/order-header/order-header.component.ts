import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-header',
  standalone: true,
  imports: [],
  templateUrl: './order-header.component.html',
  styleUrl: './order-header.component.scss'
})
export class OrderHeaderComponent {
  @Input() isShowCancelOrderOption: boolean = true;
  @Input() isShowDoneOrderOption: boolean = false;
}
