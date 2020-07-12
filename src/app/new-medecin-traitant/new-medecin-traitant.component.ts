import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MedecinService} from "../services/medecin.service";
import {MedecinTraitant} from "../model/medecin/medecin-traitant";

@Component({
  selector: 'app-new-medecin-traitant',
  templateUrl: './new-medecin-traitant.component.html',
  styleUrls: ['./new-medecin-traitant.component.css']
})
export class NewMedecinTraitantComponent implements OnInit {
forms:FormGroup;
medecins: Array<MedecinTraitant>;
  constructor(private formBuilder: FormBuilder,
    public router:Router,
    public medecinService: MedecinService
  ) { }

  ngOnInit(): void {
    this.initform();
    this.initMedecins();
  }


  private initform() {
    this.forms = this.formBuilder.group(
      {
        nom: new FormControl(),
        prenom: new FormControl(),
        tel: new FormControl(),
      });
  }

  createNewMedecin(){
    console.log(this.forms.value);

    this.medecinService.saveMedecin(this.forms)
      .subscribe(          response => {
          console.log('response: ', response);
        },
        error => {
          console.log('Error: ', error.error);
        });
    window.location.reload();
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

  deleteMed(id: number) {
    this.medecinService.deleteMedic(id).subscribe(
      data => {
      }),
      err=>{
        console.log('error', err.error.message)
      };
    window.location.reload();

  }
}
