import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Assets, AssetsData} from "../models/assets";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap,map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private url = `${environment.apiUrl}/cryptocurrency/listings/latest`;
  constructor(public http: HttpClient) { }

  /* getAsset(symbol): Observable<Assets> {
    return this.http.get(this.url.replace('%symbol%', symbol)).pipe(tap(console.log));
  }
   */

  getAssets(): Observable<AssetsData> {
    return this.http.get(this.url, {
      headers: new HttpHeaders({'X-CMC_PRO_API_KEY': environment.apiKey, 'Access-Control-Allow-Origin': '*'})
    }).pipe(map(assets => assets['data']));
  }
}

