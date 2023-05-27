import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesummeryComponent } from './revenuesummery.component';

describe('RevenuesummeryComponent', () => {
  let component: RevenuesummeryComponent;
  let fixture: ComponentFixture<RevenuesummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuesummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuesummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
