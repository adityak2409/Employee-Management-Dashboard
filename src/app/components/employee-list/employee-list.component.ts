import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';  


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, HttpClientModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ['name', 'email', 'department', 'joiningDate', 'actions'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.dataSource.data = data;
    });
  }

  deleteEmployee(employee: Employee) {

    const confirmed = window.confirm(`Are you sure you want to delete ${employee.name}?`);
    
    if (confirmed) {
      this.employeeService.deleteEmployee(employee.id).subscribe(() => {
        
        this.dataSource.data = this.dataSource.data.filter(emp => emp.id !== employee.id);
      }, error => {
        console.error('Error deleting employee:', error);
      });
    }
  }
}