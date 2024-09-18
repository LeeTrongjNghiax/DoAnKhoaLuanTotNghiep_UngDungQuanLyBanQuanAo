import { Component, OnInit } from '@angular/core';
import { TTextFieldComponent } from '../../shared/components/t-text-field/t-text-field.component';
import { TButtonComponent } from '../../shared/components/t-button/t-button.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [TTextFieldComponent, TButtonComponent],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss'
})
export class OtpInputComponent implements OnInit {
  public email: string | null = '';

  public constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
  ) {}

  public ngOnInit(): void {
    this.email = this.activeRoute.snapshot.paramMap.get("email");
  }

  public onClick() {
    this.route.navigate(['sign-up']);
  }
}
