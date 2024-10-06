import { Component, Input } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TButtonComponent } from "../button/button.component";
import { IDropdownItem } from './interfaces/dropdown-item';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NzDropDownModule, TButtonComponent, NgFor, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class TDropdownComponent {
  @Input() label: string = "";
  @Input() dropdownItems: IDropdownItem[] = [];
}
