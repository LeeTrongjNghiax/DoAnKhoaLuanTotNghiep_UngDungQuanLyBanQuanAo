import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { TLinkComponent } from "../../shared/components/link/link.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbComponent, TLinkComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Hồ sơ người dùng', link: ''}
  ];
  public routes: IBreadcrumb[] = [
    {label: 'Thông tin cá nhân', link: '/profile/profile-info'}, 
    {label: 'Lịch sử mua hàng', link: '/profile/order-status'}, 
  ]

  public constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const findRouteIndex = this.routes.findIndex(
          (e: IBreadcrumb) => e.link === val.url
        );

        this.breadcrumbs[2] = ( this.routes[findRouteIndex] );
      }
    });
  }
}
