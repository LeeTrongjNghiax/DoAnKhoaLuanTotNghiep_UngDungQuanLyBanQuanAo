import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLinkComponent } from './link.component';

describe('TLinkComponent', () => {
  let component: TLinkComponent;
  let fixture: ComponentFixture<TLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
