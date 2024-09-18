import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TLinkComponent } from '../../shared/components/link/link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TTextFieldComponent, TLinkComponent, AngularSvgIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
