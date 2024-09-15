import { Component, OnInit } from '@angular/core';
import { TTextFieldComponent } from '../../shared/components/t-text-field/t-text-field.component';
import { TButtonComponent } from '../../shared/components/t-button/t-button.component';
import { ActivatedRoute } from '@angular/router';
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

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get("email");
  }
}
