import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  forms: FormGroup;
  isAlone : boolean;

  constructor() { }
  GIR : number;
  ngOnInit() {
  }

  calcul() {

  }
}
