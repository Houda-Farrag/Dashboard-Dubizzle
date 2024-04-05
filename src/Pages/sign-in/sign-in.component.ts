import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../Services/Admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private adminServ: AdminService, private router: Router) {
  }

  login(name: string, password: string) {

    // mahmoudfaraag => user name
    // pass => 1234567mahm
    // email => mahmiti2022@gmail.com

    this.adminServ.logIn(name.trim(), password.trim()).subscribe((res) => {
      let response: any = res
      let { accessToken, message } = response

      if (res && accessToken) {
        localStorage.setItem('token', accessToken)
        this.adminServ.admin.next(this.adminServ.decodeToken(accessToken))
        if (localStorage.getItem("token")) {

          this.adminServ.ckeckSubject.next(this.adminServ.isLoged)

          if (this.adminServ.isLoged) {
            this.router.navigate(['home'])
          }
        }
      }

    })
  }

  logintest() {
    this.adminServ.loginTest()
  }

}
