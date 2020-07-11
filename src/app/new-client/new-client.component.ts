import {Component, OnInit} from '@angular/core';
import {Client} from "../model/client/client";
import {ImageService} from "../services/image.service";
import {KeycloakSecurityService} from "../security/keycloak-security.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ClientService} from "../services/client.service";
import {MedecinTraitant} from "../model/medecin/medecin-traitant";
import {MedecinService} from "../services/medecin.service";

class ImageSnippet {
  constructor(public src: string, public file: File) {
  }
}

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  forms: FormGroup;
  cafs = ['CAF1', 'CAF2', 'CAF3'];
  birthdate: Date = new Date();
  min: Date = new Date(1930, 1, 1)
  max: Date = new Date(1980, 12, 31)
  securityService: KeycloakSecurityService;

  constructor(public kcService: KeycloakSecurityService,
              private formBuilder: FormBuilder,
              public clientService: ClientService,
              public medecinService: MedecinService) {
  }

  isAuth2 = false;
  keycloak: any;
  userInformations: any;
  medecins: Array<MedecinTraitant>;

  ngOnInit() {
    this.initform();
    this.initMedecins();
    this.keycloak = this.kcService.kc;
    this.isAuth2 = this.keycloak.authenticated;
    this.userInformations = this.isAuth2 ? this.keycloak.idTokenParsed : {};
  }

  private initform() {
    this.forms = this.formBuilder.group(
      {
        nom: new FormControl(),
        prenom: new FormControl(),
        telephone: new FormControl(),
        referent: new FormControl(),
        referent_tel: new FormControl(),
        maison_id: new FormControl(),
        caf: new FormControl(),
        medecinTraitant: new FormControl(),
      }
    )
  }

  submit() {
    console.log(this.forms.value);
    this.clientService.saveClient(this.forms)
      .subscribe(response => {
          console.log('response: ', this.forms.value);
        },
        error => {
          console.log('Error: ', error.error);
        });
  };

  private initMedecins() {
    this.medecinService.getMedecins().subscribe(
      data => {
        this.medecins = data;
        console.log('medecins', data);
      },
      err => {
        console.log('error: ', err.error.message);
      }
    );
  }
}
