import { Component } from '@angular/core';
import data from '../../../../../../public/data';
import { OrderItemComponent } from "./components/order-item/order-item.component";

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [OrderItemComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent {
  public orders = data.orders;
}
