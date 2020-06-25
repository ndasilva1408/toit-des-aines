import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient, HttpClientModule} from "@angular/common/http";

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance;

  constructor(private  http:HttpClient) {}

  public async init(){
    console.log("Security Init");
    this.kc=new Keycloak({
      url:"http://localhost:8180/auth",
      realm: "tda-realm",
      clientId:"angular-tda"
    });
    await this.kc.init({
      onLoad:'check-sso'

    });
    console.log(this.kc.token);
  }

}
