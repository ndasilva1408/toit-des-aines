import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../model/employee/employee";
import {HttpClient, HttpParams} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmps(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>('http://localhost:9090/getEmployees')

  }

  saveEmp(form: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>('http://localhost:9090/saveEmp', form.value);

  }

  deleteEmployee(id: any): Observable<{}> {
    return this.http.delete<Employee>('http://localhost:9090/deleteEmployee',{
      params:new HttpParams().set('id',id)
    })
  }
}
