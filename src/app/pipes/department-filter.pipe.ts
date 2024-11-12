import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentFilter',
  standalone: true
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: any[], department:string):any[] {

    return employees.filter(employee=>employee.department === department);
  }

}
