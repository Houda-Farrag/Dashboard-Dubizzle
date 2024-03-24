import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChartsComponent } from './product-charts.component';

describe('ProductChartsComponent', () => {
  let component: ProductChartsComponent;
  let fixture: ComponentFixture<ProductChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductChartsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
