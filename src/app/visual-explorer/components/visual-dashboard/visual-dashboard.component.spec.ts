import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDashboardComponent } from './visual-dashboard.component';

describe('VisualDashboardComponent', () => {
  let component: VisualDashboardComponent;
  let fixture: ComponentFixture<VisualDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
