import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TLinkComponent } from '../../../shared/components/link/link.component';
import { TTextFieldComponent } from '../../../shared/components/text-field/text-field.component';
import { TDropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { IDropdownItem } from '../../../shared/components/dropdown/interfaces/dropdown-item';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    AngularSvgIconModule, 
    RouterLink, 
    TLinkComponent, 
    TTextFieldComponent, 
    TDropdownComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public token: string | null = localStorage.getItem("token");

  public ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? '';
  }

  public dropdownItems: IDropdownItem[][] = [
    [
      {
        name: "Áo thun có in hình", 
        link: "", 
      }, 
      {
        name: "Áo thun trơn", 
        link: "", 
      }, 
      {
        name: "Áo thun phối màu", 
        link: "", 
      }, 
      {
        name: "Áo thun dáng rộng", 
        link: "", 
      }, 
      {
        name: "Áo thun dáng vừa", 
        link: "", 
      }, 
      {
        name: "Áo thun tay dài", 
        link: "", 
      }, 
      {
        name: "Áo thun ba lỗ", 
        link: "", 
      }, 
    ], 
    [
      {
        name: "Quần bò", 
        link: "", 
      }, 
      {
        name: "Quần short", 
        link: "", 
      }, 
      {
        name: "Quần jean", 
        link: "", 
      }, 
    ], 
    [
      {
        name: "Túi xách", 
        link: "", 
      }, 
      {
        name: "Vòng tay", 
        link: "", 
      }, 
    ], 
  ];

  constructor() {
    console.log("Token", this.token);
  }
}
