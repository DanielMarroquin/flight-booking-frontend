import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiEnvironment } from '../../config/api.config';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }


  createBooking(model: any) {
    return this.http.post(`${apiEnvironment.url}/booking/create-booking`, model);
  }

  findAllBooking(): Observable<any> {
    return this.http.get<any>(`${apiEnvironment.url}/booking/list-bookings`);
  }
}
