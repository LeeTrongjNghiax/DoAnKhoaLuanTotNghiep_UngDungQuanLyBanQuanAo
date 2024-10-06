import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-catergory',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-catergory.component.html',
  styleUrl: './product-catergory.component.scss'
})
export class ProductCatergoryComponent {
  @Input() label: string = "Ao thun";
  @Input() quantity: number = 0;
  @Input() link: string = "";
  @Input() image: string = "";
}
