import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../model/client/client";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


getClients(): Observable<Array<Client>> {
  return this.http.get<Array<Client>>('http://localhost:9090/getClients');
}

}
