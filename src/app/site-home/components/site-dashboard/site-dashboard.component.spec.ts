import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDashboardComponent } from './site-dashboard.component';

describe('DashboardComponent', () => {
  let component: SiteDashboardComponent;
  let fixture: ComponentFixture<SiteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
