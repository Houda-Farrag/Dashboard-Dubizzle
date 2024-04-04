import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {

  }

  logIn(username: string, password: string) {
    return this.httpClient.post(`${environment.EndPointUrl}loginAdmin`, { username, password })
  }

}
