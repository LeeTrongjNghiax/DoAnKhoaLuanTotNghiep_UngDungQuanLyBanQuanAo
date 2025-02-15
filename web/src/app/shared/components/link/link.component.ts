import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class TLinkComponent {
  @Input() link: string = '';
  @Input() label: string = '';
}
