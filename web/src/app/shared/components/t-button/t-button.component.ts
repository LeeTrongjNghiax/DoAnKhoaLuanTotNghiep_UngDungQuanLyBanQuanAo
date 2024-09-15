import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-t-button',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, NzButtonModule],
  templateUrl: './t-button.component.html',
  styleUrl: './t-button.component.scss', 
})
export class TButtonComponent {
  @Input() iconName: string = '';
  @Input() label: string = 'Button';
  @Input() isDisabled: boolean = false;
}
