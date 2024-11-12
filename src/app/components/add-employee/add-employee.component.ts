import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  providers: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departments = ['HR', 'Engineering', 'Marketing'];

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],  
      department: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.departments);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
        alert('Employee added successfully!');
        
        
        this.employeeForm.reset();
  
        
        Object.keys(this.employeeForm.controls).forEach(controlName => {
          const control = this.employeeForm.get(controlName);
          if (control) {
            control.setErrors(null);
            control.markAsPristine();
            control.markAsUntouched();
          }
        });
      });
    }
  }
  
}
