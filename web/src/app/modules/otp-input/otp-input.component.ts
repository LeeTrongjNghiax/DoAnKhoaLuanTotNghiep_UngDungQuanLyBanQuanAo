import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';

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
