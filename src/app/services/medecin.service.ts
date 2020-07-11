import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedecinTraitant} from "../model/medecin/medecin-traitant";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) {
  }


  getMedecins(): Observable<Array<MedecinTraitant>> {
    return this.http.get<Array<MedecinTraitant>>('http://localhost:9090/getMedecins');
  }
}
