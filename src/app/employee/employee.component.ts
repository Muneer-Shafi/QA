import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeType } from './types';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeApi: EmployeeService) {}
  public isSingleEmployee: boolean = false;
  public employeeList: EmployeeType[] = [];
  public singleEmployee: EmployeeType = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
  };

  ngOnInit(): void {
    this.employeeApi.getAllEmployees().subscribe((res: EmployeeType[]) => {
      this.employeeList = res;
    });
  }

  getSigleEmployee(id: number): EmployeeType {
    this.employeeApi.getEmployee(id).subscribe((res) => {
      this.singleEmployee = res;
    });

    if (this.singleEmployee.id != 0) {
      this.isSingleEmployee = true;
    }
    return this.singleEmployee;
  }

  deleteEmployee(id: number): boolean {

    
    //logic here
    return true;
  }
}
