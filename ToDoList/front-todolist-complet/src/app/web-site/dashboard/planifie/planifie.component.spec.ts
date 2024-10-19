import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifieComponent } from './planifie.component';

describe('PlanifieComponent', () => {
  let component: PlanifieComponent;
  let fixture: ComponentFixture<PlanifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanifieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
