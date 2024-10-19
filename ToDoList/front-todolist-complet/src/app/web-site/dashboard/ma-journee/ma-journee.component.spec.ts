import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaJourneeComponent } from './ma-journee.component';

describe('MaJourneeComponent', () => {
  let component: MaJourneeComponent;
  let fixture: ComponentFixture<MaJourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaJourneeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaJourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
