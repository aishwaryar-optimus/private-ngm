import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteFilterComponent } from './site-filter.component';

describe('SiteFilterComponent', () => {
  let component: SiteFilterComponent;
  let fixture: ComponentFixture<SiteFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
