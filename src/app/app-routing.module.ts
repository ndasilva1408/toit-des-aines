import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {SimulatorComponent} from "./simulator/simulator.component";


const routes: Routes = [
  {path: 'admin' , component: AdminComponent},
  {path: 'admin/new-client' , component: NewClientComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'simulator' , component: SimulatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
