import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCateCardComponent } from './sub-cate-card.component';

describe('SubCateCardComponent', () => {
  let component: SubCateCardComponent;
  let fixture: ComponentFixture<SubCateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCateCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubCateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
