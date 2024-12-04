import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemDetailComponent } from './new-item-detail.component';

describe('NewItemDetailComponent', () => {
  let component: NewItemDetailComponent;
  let fixture: ComponentFixture<NewItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
