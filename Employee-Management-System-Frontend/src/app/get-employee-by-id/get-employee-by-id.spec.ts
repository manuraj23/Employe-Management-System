import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeById } from './get-employee-by-id';

describe('GetEmployeeById', () => {
  let component: GetEmployeeById;
  let fixture: ComponentFixture<GetEmployeeById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetEmployeeById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmployeeById);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
