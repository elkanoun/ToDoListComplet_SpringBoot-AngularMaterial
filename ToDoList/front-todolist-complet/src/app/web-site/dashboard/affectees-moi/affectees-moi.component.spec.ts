import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecteesMoiComponent } from './affectees-moi.component';

describe('AffecteesMoiComponent', () => {
  let component: AffecteesMoiComponent;
  let fixture: ComponentFixture<AffecteesMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AffecteesMoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffecteesMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
