import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDialogComponent } from './cust-dialog.component';

describe('CustDialogComponent', () => {
  let component: CustDialogComponent;
  let fixture: ComponentFixture<CustDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
