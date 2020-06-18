import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewIntervenantComponent } from './new-intervenant/new-intervenant.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NewClientComponent,
    NewIntervenantComponent,
    NewEmployeeComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DateInputsModule,
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
