import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

export const routes: Routes = [

    {path:"employee-list",component:EmployeeListComponent},
    {path:"add-employee",component:AddEmployeeComponent},
    {path:"employee-card",component:EmployeeCardComponent},
    
];
