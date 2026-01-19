import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-get-employee-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-employee-by-id.html'
})
export class GetEmployeeByIdComponent {

  id!: number;
  employee: any;

  constructor(private service: EmployeeService) {}

  getEmployee() {
    this.service.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}
