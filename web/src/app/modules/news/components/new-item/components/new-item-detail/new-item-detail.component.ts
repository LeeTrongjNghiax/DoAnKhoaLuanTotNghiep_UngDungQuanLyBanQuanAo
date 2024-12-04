import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewResponse } from '../../../../../../core/interfaces/api/response/new-response';
import data from '../../../../../../../../public/data';
import { IBreadcrumb } from '../../../../../../shared/components/breadcrumb/types/breadcrumb';
import { BreadcrumbComponent } from "../../../../../../shared/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-new-item-detail',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './new-item-detail.component.html',
  styleUrl: './new-item-detail.component.scss'
})
export class NewItemDetailComponent implements OnInit{
  public new: INewResponse | undefined;
  public breadcrumbs!: IBreadcrumb[];

  public constructor(
    private activatedRoute: ActivatedRoute, 
  ) {}

  public ngOnInit() {
    this.new = data.news.find(e => 
      e.id === this.activatedRoute.snapshot.paramMap.get('id')
    );
    this.breadcrumbs = [
      {label: 'Trang chủ', link: '/'}, 
      {label: 'Tin tức', link: '/news'},
      {label: this.new?.id ?? '', link: `/${this.new?.id}`}
    ];
  }
}
