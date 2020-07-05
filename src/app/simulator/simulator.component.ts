import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SimulatorServiceService} from "../services/simulator-service.service";
import {Simapa} from "../model/simapa/simapa";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  forms: FormGroup;
  model:Simapa;
  aide:number;
  submitted=false;
  girs= [
    '1','2','3','4','5','6'
  ];


  private messageError: string;

  constructor(private formBuilder: FormBuilder,
              private simulatorService: SimulatorServiceService) {}

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.model = new Simapa();

    this.forms = this.formBuilder.group(
      {
       alone: new FormControl(),
        gir : new FormControl(),
        revenus: new FormControl()
      }
    )

  }


  calcul() {

    console.log(this.model);

    this.simulatorService.simulate(this.model)
      .subscribe(
        response=>{
          console.log('response',response);
          this.submitted=true;
          this.model = response;
          this.aide=Math.round(response.plafondGIR-response.estimation);
        },
        err => {
          console.log('Error: ', err.error.message);
          this.messageError = err.error.message;
        }
      );


  }
}
