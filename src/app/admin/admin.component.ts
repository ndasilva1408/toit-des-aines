import {Component, NgModule, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

@NgModule({
  imports: [
    RouterModule
  ]})

export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
