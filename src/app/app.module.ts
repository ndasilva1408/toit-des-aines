import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import { HomeComponent } from './home/home.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {KeycloakSecurityService} from "./security/keycloak-security.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng";
import { GestionComponent } from './gestion/gestion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RequestInterceptorService} from "./services/request-interceptor.service";



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
    GestionComponent
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
    ],
  exports:[RouterModule],
  providers: [
    {provide:APP_INITIALIZER, deps:[KeycloakSecurityService],useFactory:kcFactory , multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
