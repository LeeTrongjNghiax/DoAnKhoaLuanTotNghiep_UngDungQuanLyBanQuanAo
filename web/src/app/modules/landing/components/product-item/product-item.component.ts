import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IProductResponse } from '../../../../core/interfaces/api/response/product-response';
import { ProductService } from '../../../../core/services/product.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: IProductResponse;
}
