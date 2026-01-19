import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-get-all-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-employees.html'
})
export class GetAllEmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
