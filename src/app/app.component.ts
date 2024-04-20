import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../Pages/home/home.component';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './Components/header/header.component';
import { AdminService } from '../Services/Admin/admin.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Dashboard-Dubizzle';
  isUser: boolean;
  constructor(private adminServ: AdminService, private router: Router) {
    this.isUser = this.adminServ.isLoged
  }
  ngOnInit(): void {
    initFlowbite();
    this.adminServ.checkUserState().subscribe(result => this.isUser = result)
  }
  logout() {
    // this.adminServ.logOuttest()

    this.adminServ.logOut().subscribe((reselt) => {
      console.log(reselt)
      if (reselt) {
        localStorage.removeItem("token")
        this.adminServ.ckeckSubject.next(this.adminServ.isLoged)
        this.router.navigate(['signin'])
      }
    })
  }

  navigate(page: string) {
    this.router.navigate([page])
  }

}