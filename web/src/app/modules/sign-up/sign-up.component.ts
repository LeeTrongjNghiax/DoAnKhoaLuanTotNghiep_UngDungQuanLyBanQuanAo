import { Component } from '@angular/core';
import { TTextFieldComponent } from "../../shared/components/t-text-field/t-text-field.component";
import { TButtonComponent } from "../../shared/components/t-button/t-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, TTextFieldComponent, TButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  public name = '';
  public phoneNumber = '';
  public username = '';
  public password = '';
  public confirmPassword = '';

  public onChangeName(e: string) {this.name = e}
  public onChangePhoneNumber(e: string) {this.phoneNumber = e}
  public onChangeUsername(e: string) {this.username = e}
  public onChangePassword(e: string) {this.password = e}
  public onChangeConfirmPassword(e: string) {this.confirmPassword = e}
}
