import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Charts3DComponent } from './charts3-d.component';

describe('Charts3DComponent', () => {
  let component: Charts3DComponent;
  let fixture: ComponentFixture<Charts3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Charts3DComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Charts3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
