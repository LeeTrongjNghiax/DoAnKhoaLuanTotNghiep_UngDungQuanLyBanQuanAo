import { Component } from '@angular/core';
import { TTextFieldComponent } from "../../shared/components/t-text-field/t-text-field.component";
import { TLinkComponent } from "../../shared/components/t-link/t-link.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TTextFieldComponent, TLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
