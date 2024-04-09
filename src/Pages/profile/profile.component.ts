import { Component } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';
import { Admin } from '../../app/Models/admin';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  AdminData!: Admin
  constructor(private adminServ: AdminService) {
    this.adminServ.adminloged().subscribe((data) => {
      let { UserInfo } = data
      this.AdminData = UserInfo
    
    })
  }
}
