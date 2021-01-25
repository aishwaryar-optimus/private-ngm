import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSummaryComponent } from './site-summary.component';

describe('SiteSummaryComponent', () => {
  let component: SiteSummaryComponent;
  let fixture: ComponentFixture<SiteSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
