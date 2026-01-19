import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-employee.html'
})
export class CreateEmployeeComponent {

  employee = {
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  };

  constructor(private service: EmployeeService) {}

  saveEmployee() {
    this.service.createEmployee(this.employee).subscribe(() => {
      alert("Employee Created Successfully!");
    });
  }
}
