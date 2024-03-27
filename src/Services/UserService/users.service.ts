import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../../app/Models/user';

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
    console.log(
      "you want to delete this user with id " + id
    )
    alert("deleted user id => " + id)
    // return this.httpclient.delete("http://localhost:3000/users/" + id)
  }

  addUser(user: User) {
    return this.httpclient.post("http://localhost:3000/users/", user)
  }

  getAllUsers(): Observable<[User]> {
    return this.httpclient.get<[User]>("http://localhost:3000/users")
  }

  getUserByID(id: string): Observable<User> {
    return this.httpclient.get<User>("http://localhost:3000/users/getUser/" + id)
  }

}
