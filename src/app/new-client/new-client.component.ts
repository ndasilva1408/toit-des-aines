import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client/client";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  cafs = ['CAF1', 'CAF2' , 'CAF3'];
  birthdate:Date = new Date();
  min: Date = new Date(1930, 1, 1)
  max: Date = new Date(1980,12,31)

  constructor() { }

  ngOnInit() {
  }

}
