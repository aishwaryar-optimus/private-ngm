import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteStepTwoComponent } from './add-site-step-two.component';

describe('AddSiteStepTwoComponent', () => {
  let component: AddSiteStepTwoComponent;
  let fixture: ComponentFixture<AddSiteStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
