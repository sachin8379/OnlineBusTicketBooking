import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBusComponent } from './all-bus.component';

describe('AllBusComponent', () => {
  let component: AllBusComponent;
  let fixture: ComponentFixture<AllBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
