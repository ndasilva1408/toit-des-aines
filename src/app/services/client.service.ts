import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Client} from "../model/client/client";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


getClients(): Observable<Array<Client>> {
  return this.http.get<Array<Client>>('http://localhost:9090/getClients');
}

  saveClient(forms: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>('http://localhost:9090/saveClient', forms.value)

  }

  deleteClient(id:any):Observable<{}>{
    return this.http.delete<Client>('http://localhost:9090/deleteClient',{
      params:new HttpParams().set('id',id)
    })
  }
}
