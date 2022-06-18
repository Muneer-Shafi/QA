import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeType } from '../employee/types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  private client: string = 'http://localhost:3000';

  getAllEmployees() {
    return this._http.get<EmployeeType[]>(`${this.client}/employees`);
  }

  getEmployee(id:number) {
    return this._http.get<EmployeeType>(`${this.client}/employees/${id}`);
  }
}
