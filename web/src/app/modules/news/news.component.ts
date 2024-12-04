import { Component } from '@angular/core';
import data from '../../../../public/data';
import { NewItemComponent } from './components/new-item/new-item.component';
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewItemComponent, BreadcrumbComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  public news = data.news;
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Tin tức', link: '/news'}
  ];
}
