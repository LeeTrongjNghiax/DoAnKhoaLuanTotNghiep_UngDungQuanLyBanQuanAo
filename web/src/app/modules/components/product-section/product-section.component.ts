import { Component, Input } from '@angular/core';
import { TButtonComponent } from "../../../shared/components/button/button.component";
import { ProductListSliderComponent } from '../product-list-slider/product-list-slider.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [ProductListSliderComponent, TButtonComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {
  @Input() title: string = '';

  constructor(private route: Router) {}

  public onClickSeeAll() {
    this.route.navigate(['/product-list']);
  }
}
