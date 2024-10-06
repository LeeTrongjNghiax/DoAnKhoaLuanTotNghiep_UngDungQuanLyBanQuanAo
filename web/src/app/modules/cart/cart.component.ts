import { Component } from '@angular/core';
import { ProductListComponent } from '../landing/components/product-list/product-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

}
