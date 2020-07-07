import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee/employee";
import {EmployeeService} from "../services/employee.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  forms: FormGroup;
  employee:Employee;
  employees:Array<Employee>;
  errorMessage : any;



  constructor( private empService: EmployeeService,
               private formBuilder: FormBuilder) { }



  ngOnInit() {
    this.initform();
    this.initEmployees();
  }

  private initEmployees() {
    this.empService.getEmps().subscribe(
      data => {
        this.employees = data;
        console.log('emp :',data)
      //  console.log('employees :', this.employees)
      }, error => {
        this.errorMessage = error.error.message;
        console.log('error: ', error.error.message)
      }
    );
  }


  private initform() {
    this.forms = this.formBuilder.group(
      {
        nom: new FormControl(),
        prenom: new FormControl(),
        salaire: new FormControl(),
        heure: new FormControl(),
        tel: new FormControl(),
        mail: new FormControl(),
        profession: new FormControl(),
        droitimg: new FormControl(),

      });
  }


  save(){
    console.log(this.forms.value)

    this.empService.saveEmp(this.forms)
      .subscribe(          response => {
          console.log('response: ', response);
        },
        error => {
          console.log('Error: ', error.error);
        });
  };

}
