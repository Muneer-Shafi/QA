import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  
  postTest(data: any) {
    return this._http.post<any>('http://localhost:3000/questions/', data);
  }
  //now get method
  getTest() {
    return this._http.get('http://localhost:3000/questions');
  }
  //update using put method
  updateTest(data: any, id: number) {
    return this._http.put<any>('http://localhost:3000/questions/' + id, data);
  }
  deleteTest(id: number) {
    console.log(id);
    return this._http.delete<any>('http://localhost:3000/questions/' + id);
  }
  postUsers(data: any) {
    return this._http.post<any>('http://localhost:3000/users/', data);
  }
}
