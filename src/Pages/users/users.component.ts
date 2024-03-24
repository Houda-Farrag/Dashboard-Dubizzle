import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users!: User[]

  constructor(private userService: UsersService) {

  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data
    })
  }

}
