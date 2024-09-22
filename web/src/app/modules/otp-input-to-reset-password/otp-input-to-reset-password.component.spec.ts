import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpInputToResetPasswordComponent } from './otp-input-to-reset-password.component';

describe('OtpInputToResetPasswordComponent', () => {
  let component: OtpInputToResetPasswordComponent;
  let fixture: ComponentFixture<OtpInputToResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpInputToResetPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpInputToResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
