import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-employee.html'
})
export class DeleteEmployeeComponent {

  id!: number;

  constructor(private service: EmployeeService) {}

  delete() {
    this.service.deleteEmployee(this.id).subscribe(() => {
      alert("Employee Deleted!");
    });
  }
}
