import {Component, OnInit} from '@angular/core';
import {KeycloakSecurityService} from "./security/keycloak-security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Toit des aînés';

 constructor(public kcService:KeycloakSecurityService) {
 }
 isAuth = false;
 keycloak:any;
 userInformations:any;

  ngOnInit() {
    this.keycloak=this.kcService.kc;
    this.isAuth=this.keycloak.authenticated;
    this.userInformations = this.isAuth ? this.keycloak.idTokenParsed : {};
  }
  onLogin() {
    this.keycloak.login();
  }
  onLogout() {
    this.keycloak.logout();
  }
  ManagedAccount() {
    this.keycloak.accountManagement();
  }
  isAppManager() {
    return this.keycloak.hasRealmRole('tda-manager');
  }


}
