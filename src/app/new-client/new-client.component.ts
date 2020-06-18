import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client/client";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  cafs = ['CAF1', 'CAF2' , 'CAF3'];


  constructor() { }

  ngOnInit() {
  }

}
