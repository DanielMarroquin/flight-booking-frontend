import { Injectable } from '@angular/core';
import { apiEnvironment } from "../../config/api.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }

  createClient(model: any) {
    return this.http.post(`${apiEnvironment.url}/clients/create-client`, model);
  }

  findAllClients(): Observable<any> {
    return this.http.get<any>(`${apiEnvironment.url}/clients/list-clients`);
  }
}
