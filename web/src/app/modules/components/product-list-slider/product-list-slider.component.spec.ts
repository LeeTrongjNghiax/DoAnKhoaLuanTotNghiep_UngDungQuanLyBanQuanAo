import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSliderComponent } from './product-list-slider.component';

describe('ProductListSliderComponent', () => {
  let component: ProductListSliderComponent;
  let fixture: ComponentFixture<ProductListSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
