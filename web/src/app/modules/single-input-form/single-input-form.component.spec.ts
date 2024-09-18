import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInputFormComponent } from './single-input-form.component';

describe('SingleInputFormComponent', () => {
  let component: SingleInputFormComponent;
  let fixture: ComponentFixture<SingleInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleInputFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
