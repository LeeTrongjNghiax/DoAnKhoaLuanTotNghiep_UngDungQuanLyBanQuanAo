import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TTextFieldComponent } from './text-field.component';

describe('TTextFieldComponent', () => {
  let component: TTextFieldComponent;
  let fixture: ComponentFixture<TTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TTextFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
