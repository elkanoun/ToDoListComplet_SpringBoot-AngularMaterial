import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteComponent } from './web-site.component';

describe('WebSiteComponent', () => {
  let component: WebSiteComponent;
  let fixture: ComponentFixture<WebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
