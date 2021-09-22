import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPrintComponent } from './ticket-print.component';

describe('TicketPrintComponent', () => {
  let component: TicketPrintComponent;
  let fixture: ComponentFixture<TicketPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
