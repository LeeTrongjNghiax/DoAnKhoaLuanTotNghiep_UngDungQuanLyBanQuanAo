import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, NzButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class TButtonComponent implements OnChanges{
  @Input() iconName: string = '';
  @Input() label: string = 'Button';
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;

  public ngOnChanges(changes: SimpleChanges): void {
    // this.isLoading = changes.
  }
}
