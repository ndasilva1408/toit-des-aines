import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MedecinTraitant} from "../model/medecin/medecin-traitant";
import {FormGroup} from "@angular/forms";
import {Employee} from "../model/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) {
  }


  getMedecins(): Observable<Array<MedecinTraitant>> {
    return this.http.get<Array<MedecinTraitant>>('http://localhost:9090/getMedecins');
  }

  saveMedecin(forms: FormGroup):Observable<FormGroup> {
    return this.http.post<FormGroup>('http://localhost:9090/newMedic', forms.value)
  }

  deleteMedic(id: any): Observable<{}> {
    return this.http.delete<MedecinTraitant>('http://localhost:9090/deleteMedic',{
      params:new HttpParams().set('id',id)
    })
  }
}
