import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../../app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient: HttpClient) {

  }
  getAllUsers(): Observable<[User]> {
    return this.httpclient.get<[User]>("http://localhost:3000/users")
  }
}
