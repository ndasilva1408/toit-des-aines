import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewClientComponent} from "./new-client/new-client.component";
import {SimulatorComponent} from "./simulator/simulator.component";
import {GestionComponent} from "./gestion/gestion.component";
import {PageemployeeComponent} from "./pageemployee/pageemployee.component";
import {NewIntervenantComponent} from "./new-intervenant/new-intervenant.component";
import {NewEmployeeComponent} from "./new-employee/new-employee.component";
import {EmplistComponent} from "./emplist/emplist.component";
import {SecuriteComponent} from "./securite/securite.component";
import {SolidariteComponent} from "./solidarite/solidarite.component";
import {AccompagnementsComponent} from "./accompagnements/accompagnements.component";
import {NewMedecinTraitantComponent} from "./new-medecin-traitant/new-medecin-traitant.component";


const routes: Routes = [
  {path: 'admin' , component: PageemployeeComponent},
  {path: 'admin/new-client' , component: NewClientComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'home/simulator' , component: SimulatorComponent},
  {path: 'admin/new-intervenant', component: NewIntervenantComponent},
  {path: 'admin/employees/new-employee', component: NewEmployeeComponent},
  {path: 'admin/employees', component: EmplistComponent},
  {path: 'home/securite', component: SecuriteComponent},
  {path: 'home/solidarite', component: SolidariteComponent},
  {path: 'home/accompagnement', component: AccompagnementsComponent},
  {path: 'admin/new-medecin' , component: NewMedecinTraitantComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
