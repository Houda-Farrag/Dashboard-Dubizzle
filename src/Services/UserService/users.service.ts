import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../../app/Models/user';
import { SubCategoriesServiceService } from '../Sub-Categories/sub-categories-service.service';
import { Isubcategory } from '../../app/Models/isubcategory';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersData!: User[]

  constructor(private httpclient: HttpClient) {
    this.getAllUsers().subscribe((Data) => {
      this.usersData = Data
    })

  }

  deleteUserById(id: string) {
    environment.EndPointUrl
    return this.httpclient.delete(`${environment.EndPointUrl}users/` + id)
  }

  addUser(user: User) {
    return this.httpclient.post(`${environment.EndPointUrl}users/`, user)
  }

  getAllUsers(): Observable<[User]> {
    return this.httpclient.get<[User]>(`${environment.EndPointUrl}users`)
  }

  getUserByID(id: string): Observable<User> {
    return this.httpclient.get<User>(`${environment.EndPointUrl}users/getUser/${id}`)
  }
  getUserByIDOfline(id: string) {
    this.usersData.find((user) => { })
  }

}
