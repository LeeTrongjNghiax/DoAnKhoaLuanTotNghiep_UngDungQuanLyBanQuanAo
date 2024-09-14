import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TTextFieldComponent } from "../../shared/components/t-text-field/t-text-field.component";
import { TLinkComponent } from "../../shared/components/t-link/t-link.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, TTextFieldComponent, TLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
