import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiEnvironment } from '../../config/api.config';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class FlightsServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAllFlights(page: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(
      `${apiEnvironment.url}/flight/find-all`,
      { params }
    ).pipe(
      map(response => response)
    );
  }


}
