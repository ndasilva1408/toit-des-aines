import { Injectable } from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Intervenant} from "../model/intervenant/intervenant";
import {Employee} from "../model/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  constructor(private http:HttpClient) { }

  saveEmp(forms: FormGroup):Observable<FormGroup> {
    return this.http.post<FormGroup>('http://localhost:9090/newInter', forms.value)
  }

  getInters(): Observable<Array<Intervenant>> {
    return this.http.get<Array<Intervenant>>('http://localhost:9090/getInters')

  }

  deleteIntervenant(id: any): Observable<{}> {
    return this.http.delete<Intervenant>('http://localhost:9090/deleteInter',{
      params:new HttpParams().set('id',id)
    })

  }
}
