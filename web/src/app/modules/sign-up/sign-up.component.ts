import { Component } from '@angular/core';
import { TTextFieldComponent } from "../../shared/components/t-text-field/t-text-field.component";
import { TButtonComponent } from "../../shared/components/t-button/t-button.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [TTextFieldComponent, TButtonComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
