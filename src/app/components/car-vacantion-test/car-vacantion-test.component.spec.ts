import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVacantionTestComponent } from './car-vacantion-test.component';

describe('CarVacantionTestComponent', () => {
  let component: CarVacantionTestComponent;
  let fixture: ComponentFixture<CarVacantionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarVacantionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarVacantionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
