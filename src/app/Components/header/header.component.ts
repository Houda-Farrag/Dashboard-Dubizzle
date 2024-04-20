import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AdminService } from '../../../Services/Admin/admin.service';
import { Admin } from '../../Models/admin';


@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent implements OnInit {

  items = ["users", "category", "sub-category", "properties", "products"]
  admin!: Admin
  openAvatar: boolean
  openHeader: boolean
  isUser: boolean
  constructor(private adminServ: AdminService, private router: Router) {
    this.openAvatar = true
    this.openHeader = true
    this.isUser = this.adminServ.isLoged
    this.adminServ.adminloged().subscribe((admin) => {
      this.admin = admin.UserInfo || ""
      if (admin) {
        let { UserInfo } = admin
        if (UserInfo) {
          this.admin = UserInfo
        } else {
          this.admin = { username: "", avatar: "", roles: [], userType: "", description: "", email: "" }
        }
      } else {
        this.admin = { username: "", avatar: "", roles: [], userType: "", description: "", email: "" }
      }
      console.log(this.admin)
    })
    //  this.adminServ.decodeToken(localStorage.getItem("token") || '').UserInfo

  }
  ngOnInit(): void {
    this.adminServ.checkUserState().subscribe(result => {
      this.isUser = result
    })
  }
  isopenAvatar() {
    this.openAvatar = !this.openAvatar
  }
  isopenHeader() {
    this.openHeader = !this.openHeader
  }

  logout() {
    this.adminServ.logOut().subscribe((response) => {
      console.log(response)
      if (response) {
        localStorage.removeItem("token")
        this.adminServ.ckeckSubject.next(this.adminServ.isLoged)
        this.router.navigate(["signin"])
      }
    })

  }

}
