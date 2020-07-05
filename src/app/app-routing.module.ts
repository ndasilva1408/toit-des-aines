import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {SimulatorComponent} from "./simulator/simulator.component";
import {GestionComponent} from "./gestion/gestion.component";
import {PageemployeeComponent} from "./pageemployee/pageemployee.component";
import {NewIntervenantComponent} from "./new-intervenant/new-intervenant.component";
import {NewEmployeeComponent} from "./new-employee/new-employee.component";


const routes: Routes = [
  {path: 'admin' , component: PageemployeeComponent},
  {path: 'admin/new-client' , component: NewClientComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'home/simulator' , component: SimulatorComponent},
  {path: 'admin/new-intervenant', component: NewIntervenantComponent},
  {path: 'admin/new-employee', component: NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
