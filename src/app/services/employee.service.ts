import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  joiningDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employees';
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
     return this.http.get<Employee[]>(this.apiUrl)
  }
  addEmployee(employee:Employee):Observable<Employee>{
     return this.http.post<Employee>(this.apiUrl,employee);
  }
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
