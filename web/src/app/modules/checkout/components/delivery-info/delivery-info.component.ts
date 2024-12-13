import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TLinkComponent } from "../../../../shared/components/link/link.component";
import { TButtonComponent } from "../../../../shared/components/button/button.component";
import { IUserInfo } from '../../checkout.component';
import { FormatCurrencyPipe } from '../../../../shared/pipes/format-currency.pipe';

@Component({
  selector: 'app-delivery-info',
  standalone: true,
  imports: [TLinkComponent, TButtonComponent, FormatCurrencyPipe],
  templateUrl: './delivery-info.component.html',
  styleUrl: './delivery-info.component.scss'
})
export class DeliveryInfoComponent {
  @Input() userInfo!: IUserInfo;
  @Output() changeValueEventEmitter: EventEmitter<void> = 
    new EventEmitter<void>();

  public onClickGoToPayment() {
    this.changeValueEventEmitter.emit();
  }
}
