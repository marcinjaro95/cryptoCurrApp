import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {MetaData} from "../models/meta";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Movie} from "../../../../angular-movie-db-routing-example/src/app/models/movie";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(public http: HttpClient) {
  }

  private url = `${environment.apiUrl}?data=meta&key=${environment.apiKey}&type=full`;

  getMeta():Observable<MetaData[]> {
    return this.http.get(this.url).pipe(
      map(meta => meta['data'])
    );
  }

  getSymbols():Observable<MetaData[]> {
    return this.getMeta().pipe(map(symbols => symbols.map(symbol => symbol['symbol']))).pipe(tap(console.log));
  }

  getFilteredData(obj): Array<object> {
    for (let name in obj) {
      if (obj[name].toString().match(/name|symbol/) === null) {
        delete obj[name];
      }
    }
    return obj;
  }

  getMovies(): Observable<HttpResponse<Movie[]>> {
    return this.http.get<HttpResponse<Movie[]>>(this.url, { observe: 'response'})
      .pipe(tap(console.log));
  }

}
