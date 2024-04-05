import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Admin } from '../../app/Models/admin';
import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  ckeckSubject: BehaviorSubject<boolean>;
  admin: BehaviorSubject<any>;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.ckeckSubject = new BehaviorSubject<boolean>(this.isLoged);
    this.admin = new BehaviorSubject<any>(this.decodeToken(localStorage.getItem('token') || ""))

  }

  logIn(username: string, password: string) {

    return this.httpClient.post(`${environment.EndPointUrl}loginAdmin`, { username: username.trim(), password: password })
  }

  logOut() {
    const auth_token = localStorage.getItem("token"); // Replace with your actual token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `${auth_token}`
    });

    return this.httpClient.get(`${environment.EndPointUrl}logoutAdmin`, { headers: headers })
  }


  loginTest() {
    localStorage.setItem("token", "token added")
    this.ckeckSubject.next(this.isLoged)
    this.router.navigate(["home"])
  }
  logOuttest() {
    localStorage.removeItem("token")
    this.ckeckSubject.next(this.isLoged)
    this.router.navigate(["signin"])
  }

  get isLoged() {
    return localStorage.getItem("token") ? true : false
  }

  checkUserState(): Observable<boolean> {
    return this.ckeckSubject.asObservable();
  }

  decodeToken(token: string): any {
    if (token) {
      try {
        return jwtDecode(token)
      } catch {
        return null;
      }
    }
    else { return null }
  }
  adminloged() {
    return this.admin.asObservable();
  }
}
