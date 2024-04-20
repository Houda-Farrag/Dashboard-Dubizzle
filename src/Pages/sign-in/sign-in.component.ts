import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../Services/Admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  userName = ''
  password = ''
  tost: Boolean = true
  constructor(private adminServ: AdminService, private router: Router) {
  }

  login(name: string, password: string) {
    let response1
    try {
      this.adminServ.logIn(name.trim(), password.trim()).subscribe((res) => {
        response1 = res
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
        } else {
          console.log('failed log in')
          this.tost = false
        }

      })
    } catch (error) {

      console.log(error, "error")
    }

    if (response1 == undefined) {
      this.tost = false
      setTimeout(() => {
        this.tost = true
      }, 2000)
    }

  }


}

// logintest() {
//   this.adminServ.loginTest()
// }