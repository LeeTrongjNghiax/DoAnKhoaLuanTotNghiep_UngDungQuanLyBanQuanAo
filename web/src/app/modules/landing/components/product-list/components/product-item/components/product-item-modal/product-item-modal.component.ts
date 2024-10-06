import { Component, Input } from '@angular/core';
import { IProductResponse } from '../../../../../../../../core/interfaces/api/response/product-response';
import { TCheckboxWithLabelComponent } from '../../../../../../../../shared/components/checkbox-with-label/checkbox-with-label.component';
import { TNumberFieldComponent } from '../../../../../../../../shared/components/number-field/number-field.component';
import { TButtonComponent } from '../../../../../../../../shared/components/button/button.component';

@Component({
  selector: 'app-product-item-modal',
  standalone: true,
  imports: [
    TCheckboxWithLabelComponent, 
    TNumberFieldComponent, 
    TButtonComponent
  ],
  templateUrl: './product-item-modal.component.html',
  styleUrl: './product-item-modal.component.scss'
})
export class ProductItemModalComponent {
  @Input() product!: IProductResponse;
}
