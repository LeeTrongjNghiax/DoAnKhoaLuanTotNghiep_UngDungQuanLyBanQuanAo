import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpInputToSignUpComponent } from './otp-input-to-sign-up.component';

describe('OtpInputToSignUpComponent', () => {
  let component: OtpInputToSignUpComponent;
  let fixture: ComponentFixture<OtpInputToSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpInputToSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpInputToSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
