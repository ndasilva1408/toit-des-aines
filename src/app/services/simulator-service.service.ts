import {Injectable} from '@angular/core';
import {Form, FormGroup} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Simapa} from "../model/simapa/simapa";

@Injectable({
  providedIn: 'root'
})
export class SimulatorServiceService {

  constructor(private http: HttpClient) {
  }

  simulate(sim: Simapa): Observable<Simapa> {
    return this.http.post<Simapa>('http://localhost:9090/calculAPA', sim )
  }
}
