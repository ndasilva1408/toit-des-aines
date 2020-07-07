import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IntervenantService} from "../services/intervenant.service";

@Component({
  selector: 'app-new-intervenant',
  templateUrl: './new-intervenant.component.html',
  styleUrls: ['./new-intervenant.component.css']
})
export class NewIntervenantComponent implements OnInit {
  forms: FormGroup;
  constructor(private interService: IntervenantService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initform();
  }

  private initform() {
    this.forms = this.formBuilder.group(
      {
        nom: new FormControl(),
        prenom: new FormControl(),
        tel: new FormControl(),
        mail: new FormControl(),
        profession: new FormControl(),
      });
  }

  createNewInter(){
    console.log(this.forms.value)

    this.interService.saveEmp(this.forms)
      .subscribe(          response => {
          console.log('response: ', response);
        },
        error => {
          console.log('Error: ', error.error);
        });
  };
}
