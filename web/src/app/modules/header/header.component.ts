import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { TLinkComponent } from '../../shared/components/link/link.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularSvgIconModule, RouterLink, TLinkComponent, TTextFieldComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
