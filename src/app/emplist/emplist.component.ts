import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../model/employee/employee";

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  employee:Employee;
  employees:Array<Employee>;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.initEmployees();
  }

  private initEmployees() {
    this.empService.getEmps().subscribe(
      data => {
        this.employees = data;
        console.log('emp :',data)
      }, error => {
        console.log('error: ', error.error.message)
      }
    );

}}
