import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { INewResponse } from '../../../../core/interfaces/api/response/new-response';
import { FindFirstImagePipe } from "../../../../shared/pipes/find-first-image.pipe";
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FindAbstractPipe } from '../../../../shared/pipes/find-abstract.pipe';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [
    FindFirstImagePipe, 
    FindAbstractPipe, 
    DatePipe, 
    AngularSvgIconModule, 
    RouterLink, 
  ],
  providers: [
    FindFirstImagePipe, 
    FindAbstractPipe, 
    DatePipe, 
    {
      provide: LOCALE_ID, 
      useValue: "vi-VN"
    }
  ], 
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent {
  @Input() new!: INewResponse;
}
