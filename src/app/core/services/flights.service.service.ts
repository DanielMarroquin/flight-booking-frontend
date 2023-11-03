import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEnvironment } from '../../config/api.config';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FlightsServiceService {

  constructor(
    private http: HttpClient
  ) { }


  findAllFlights(): Observable<any> {
    return this.http.get<any>(`${apiEnvironment.url}/flight/find-all`);
  }







}
