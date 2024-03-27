import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users!: User[]

  constructor(private userService: UsersService, private router: Router) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data

    })
  }

  onClickDetails(id: string) {

    this.router.navigate(["user-details", id])
  }
  onClickDelete(id: string) {
    console.log("id => " + id)

    // let isDelete = confirm("you will delete user with Id " + id)
    // console.log(isDelete)
    // if (isDelete) {
    //   this.userService.deleteUserById(id)
    // }
  }

}
