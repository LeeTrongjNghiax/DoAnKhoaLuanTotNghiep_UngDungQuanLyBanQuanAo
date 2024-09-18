import { Component } from '@angular/core';
import { TTextFieldComponent } from "../../shared/components/t-text-field/t-text-field.component";
import { TLinkComponent } from "../../shared/components/t-link/t-link.component";
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TTextFieldComponent, TLinkComponent, AngularSvgIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
