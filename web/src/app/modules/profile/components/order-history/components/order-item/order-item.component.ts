import { Component, Input } from '@angular/core';
import { IProductResponse } from '../../../../../../core/interfaces/api/response/product-response';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [NzCollapseModule], 
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {
  @Input() order!: any;

  public getNames() {
    return this.order.products.map((e: IProductResponse) => e.name).join(', ')
  }
}
