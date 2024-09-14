import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-t-link',
  standalone: true,
  imports: [],
  templateUrl: './t-link.component.html',
  styleUrl: './t-link.component.scss'
})
export class TLinkComponent {
  @Input() link: string = '';
  @Input() label: string = '';
}
