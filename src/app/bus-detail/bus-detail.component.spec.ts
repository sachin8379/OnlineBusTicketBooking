import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailComponent } from './bus-detail.component';

describe('BusDetailComponent', () => {
  let component: BusDetailComponent;
  let fixture: ComponentFixture<BusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
