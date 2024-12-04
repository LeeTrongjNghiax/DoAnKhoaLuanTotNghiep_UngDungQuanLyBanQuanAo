import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRadioWithLabelComponent } from './radio-with-label.component';

describe('RadioWithLabelComponent', () => {
  let component: TRadioWithLabelComponent;
  let fixture: ComponentFixture<TRadioWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TRadioWithLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TRadioWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
