import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBusComponent } from './schedule-bus.component';

describe('ScheduleBusComponent', () => {
  let component: ScheduleBusComponent;
  let fixture: ComponentFixture<ScheduleBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
