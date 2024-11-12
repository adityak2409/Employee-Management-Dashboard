import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
  providers: [EmployeeService]
})
export class EmployeeCardComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
   
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
}
}
