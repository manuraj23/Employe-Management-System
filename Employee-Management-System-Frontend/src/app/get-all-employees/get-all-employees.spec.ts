import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmployees } from './get-all-employees';

describe('GetAllEmployees', () => {
  let component: GetAllEmployees;
  let fixture: ComponentFixture<GetAllEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllEmployees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
