import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPasswordFieldComponent } from './password-field.component';

describe('TPasswordFieldComponent', () => {
  let component: TPasswordFieldComponent;
  let fixture: ComponentFixture<TPasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPasswordFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
