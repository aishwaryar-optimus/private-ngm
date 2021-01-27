import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteStepOneComponent } from './add-site-step-one.component';

describe('AddSiteStepOneComponent', () => {
  let component: AddSiteStepOneComponent;
  let fixture: ComponentFixture<AddSiteStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
