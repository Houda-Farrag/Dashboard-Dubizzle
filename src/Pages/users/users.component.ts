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

  constructor(private userService: UsersService, private router: Router, private productServ: ProductsService) {
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }

  onClickDetails(id: string) {

    this.router.navigate(["user-details", id])
  }
  onClickDelete(id: string) {
    console.log("id => " + id)
    let checkDelete = confirm("Ary you Want to Delete User with id = " + id)
    if (checkDelete) {
      let checkAPI = this.userService.deleteUserById(id).subscribe((res) => { console.log(res); })

      this.productServ.deleteAllProductsWithIdSeller(id).subscribe(res => {
        console.log(res);
      })
      this.users = this.users.filter((user) => user._id != id)
    }
  }

  onClickUpdate(id: string) {
    console.log(id)
    this.router.navigate(["user-update", id])
  }

}
