import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoanApplicationComponent } from './business-loan-application.component';

describe('BusinessLoanApplicationComponent', () => {
  let component: BusinessLoanApplicationComponent;
  let fixture: ComponentFixture<BusinessLoanApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessLoanApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLoanApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
