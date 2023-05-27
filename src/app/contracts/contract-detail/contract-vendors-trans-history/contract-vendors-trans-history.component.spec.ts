import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractVendorsTransHistoryComponent } from './contract-vendors-trans-history.component';

describe('ContractVendorsTransHistoryComponent', () => {
  let component: ContractVendorsTransHistoryComponent;
  let fixture: ComponentFixture<ContractVendorsTransHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractVendorsTransHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractVendorsTransHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
