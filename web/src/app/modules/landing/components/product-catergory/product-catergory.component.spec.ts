import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatergoryComponent } from './product-catergory.component';

describe('ProductCatergoryComponent', () => {
  let component: ProductCatergoryComponent;
  let fixture: ComponentFixture<ProductCatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatergoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
