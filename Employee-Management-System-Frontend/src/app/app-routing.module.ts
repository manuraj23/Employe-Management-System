import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees';
import { GetEmployeeByIdComponent } from './get-employee-by-id/get-employee-by-id';
import { UpdateEmployee } from './update-employee/update-employee';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee';

const routes: Routes = [
  { path: '', redirectTo: 'get-all', pathMatch: 'full' },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'get-all', component: GetAllEmployeesComponent },
  { path: 'get-by-id', component: GetEmployeeByIdComponent },
  { path: 'update', component: UpdateEmployee },
  { path: 'delete', component: DeleteEmployeeComponent },
  { path: '**', redirectTo: 'get-all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
