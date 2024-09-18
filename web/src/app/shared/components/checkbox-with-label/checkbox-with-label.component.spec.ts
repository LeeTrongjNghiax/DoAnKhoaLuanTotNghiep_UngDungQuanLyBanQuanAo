import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TCheckboxWithLabelComponent } from './checkbox-with-label.component';

describe('TCheckboxWithLabelComponent', () => {
  let component: TCheckboxWithLabelComponent;
  let fixture: ComponentFixture<TCheckboxWithLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TCheckboxWithLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TCheckboxWithLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
