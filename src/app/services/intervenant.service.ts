import { Injectable } from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  constructor(private http:HttpClient) { }

  saveEmp(forms: FormGroup):Observable<FormGroup> {
    return this.http.post<FormGroup>('http://localhost:9090/newInter', forms.value)

  }
}
