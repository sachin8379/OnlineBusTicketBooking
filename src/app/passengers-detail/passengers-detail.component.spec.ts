import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersDetailComponent } from './passengers-detail.component';

describe('PassengersDetailComponent', () => {
  let component: PassengersDetailComponent;
  let fixture: ComponentFixture<PassengersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
