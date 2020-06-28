import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {SimulatorComponent} from "./simulator/simulator.component";
import {GestionComponent} from "./gestion/gestion.component";


const routes: Routes = [
  {path: 'admin' , component: GestionComponent},
  {path: 'admin/new-client' , component: NewClientComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'home/simulator' , component: SimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
