import { Routes } from '@angular/router';

import { CreateEmployeeComponent } from './create-employee/create-employee';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees';
import { GetEmployeeByIdComponent } from './get-employee-by-id/get-employee-by-id';
import { UpdateEmployee } from './update-employee/update-employee';

export const routes: Routes = [
	{ path: '', redirectTo: 'get-all', pathMatch: 'full' },
	{ path: 'create', component: CreateEmployeeComponent },
	{ path: 'get-all', component: GetAllEmployeesComponent },
	{ path: 'get-by-id', component: GetEmployeeByIdComponent },
	{ path: 'update', component: UpdateEmployee },
	{ path: 'delete', component: DeleteEmployeeComponent },
	{ path: '**', redirectTo: 'get-all' }
];
