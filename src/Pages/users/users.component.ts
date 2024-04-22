import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';
import { Router } from '@angular/router';
import { ProductsService } from '../../Services/Products/products.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass'
})
export class UsersComponent implements OnInit {
  users!: User[]
  SearchUser: User[] = []
  constructor(private userService: UsersService, private router: Router, private productServ: ProductsService) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data
      this.SearchUser = this.users
    })
  }

  onClickDetails(id: string) {

    this.router.navigate(["user-details", id])
  }
  onClickDelete(id: string) {

    let checkDelete = confirm("Ary you Want to Delete User with id = " + id)
    if (checkDelete) {
      let checkAPI = this.userService.deleteUserById(id).subscribe((res) => { })

      this.productServ.deleteAllProductsWithIdSeller(id).subscribe(res => {

      })
      this.users = this.users.filter((user) => user._id != id)
    }
  }

  onClickUpdate(id: string) {
    console.log(id)
    this.router.navigate(["user-update", id])
  }

  Search(event: Event) {
    this.SearchUser = []
    let value = document.querySelector("input")?.value
    this.users.filter(user => {
      if (user.profile.name.toLowerCase().match(`${value?.toLowerCase()}`)) {
        this.SearchUser.push(user)
        return
      }
    })
    console.log(this.SearchUser);

  }
}
