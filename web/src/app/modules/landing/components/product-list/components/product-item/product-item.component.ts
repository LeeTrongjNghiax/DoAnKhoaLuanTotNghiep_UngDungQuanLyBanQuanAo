import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProductResponse } from '../../../../../../core/interfaces/api/response/product-response';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProductItemModalComponent } from './components/product-item-modal/product-item-modal.component';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterLink,
    AngularSvgIconModule,
    NzModalModule,
    ProductItemModalComponent
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: IProductResponse;
  @Input() isModalOpen: boolean = false;

  public toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  public handleOk() {
    this.toggleModal();
  }

  public handleCancel() {
    this.toggleModal();
  }
}
