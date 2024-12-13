import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUserInfo } from '../../checkout.component';
import { FormatCurrencyPipe } from '../../../../shared/pipes/format-currency.pipe';
import { TButtonComponent } from "../../../../shared/components/button/button.component";

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [FormatCurrencyPipe, TButtonComponent],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss'
})
export class PaymentInfoComponent {
  @Input() userInfo!: IUserInfo;
  @Output() changeValueEventEmitter: EventEmitter<void> = 
    new EventEmitter<void>();

  public onClickPay() {
    this.changeValueEventEmitter.emit();
  }
}
