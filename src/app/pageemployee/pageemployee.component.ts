import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client/client";
import {Router} from "@angular/router";
import {ClientService} from "../services/client.service";
import {KeycloakSecurityService} from "../security/keycloak-security.service";

@Component({
  selector: 'app-pageemployee',
  templateUrl: './pageemployee.component.html',
  styleUrls: ['./pageemployee.component.css']
})
export class PageemployeeComponent implements OnInit {

  client: Client;
  clients:Array<Client>;
   errorMessage : any;

  constructor(private clientService: ClientService, private router: Router,public kcService:KeycloakSecurityService) { }

  isAuth2 = false;
  keycloak:any;
  userInformations:any;

  ngOnInit() {
    this.initClient();
    this.keycloak=this.kcService.kc;
    this.isAuth2=this.keycloak.authenticated;
    this.userInformations = this.isAuth2 ? this.keycloak.idTokenParsed : {};
  }

  private initClient() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
      }, error => {
        this.errorMessage = error.error.message;
        console.log('error: ', error.error.message)
      }
    );
  }

}
