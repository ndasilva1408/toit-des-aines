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

  ngOnInit(): void {
  }
}
