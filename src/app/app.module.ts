import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { NewClientComponent } from './new-client/new-client.component';
import { NewIntervenantComponent } from './new-intervenant/new-intervenant.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {KeycloakSecurityService} from "./security/keycloak-security.service";
import {ButtonModule} from "primeng";
import { GestionComponent } from './gestion/gestion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RequestInterceptorService} from "./services/request-interceptor.service";
import { PageemployeeComponent } from './pageemployee/pageemployee.component';
import { EmplistComponent } from './emplist/emplist.component';
import { SecuriteComponent } from './securite/securite.component';
import { SolidariteComponent } from './solidarite/solidarite.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AccompagnementsComponent } from './accompagnements/accompagnements.component';
import { NewMedecinTraitantComponent } from './new-medecin-traitant/new-medecin-traitant.component';



const routes: Routes = [

];

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return () => kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    NewClientComponent,
    NewIntervenantComponent,
    NewEmployeeComponent,
    SimulatorComponent,
    HomeComponent,
    ImageUploadComponent,
    GestionComponent,
    PageemployeeComponent,
    EmplistComponent,
    SecuriteComponent,
    SolidariteComponent,
    AccompagnementsComponent,
    NewMedecinTraitantComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DateInputsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports:[RouterModule],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService],useFactory:kcFactory , multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
