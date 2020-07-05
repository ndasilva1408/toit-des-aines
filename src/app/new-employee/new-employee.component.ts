import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee/employee";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  model:Employee;
  constructor() { }

  ngOnInit() {
  }

  save(){

  };

}
