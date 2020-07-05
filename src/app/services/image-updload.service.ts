import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageUpdloadService {
  private httpClient: HttpClient;

  constructor() { }

  thumbnailFetchUrl : string = "https://south/generateThumbnail?width=100&height=100&smartCropp";


  getBlobThumbnail(): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.post<Blob>(this.thumbnailFetchUrl,
      {
        "url": "http://acs/container/Logo.png"
      }, {headers: headers, responseType: 'blob' as 'json' });
  }
}
