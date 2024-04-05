import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  user!: User
  userId!: string
  constructor(private activeRouter: ActivatedRoute, private userServ: UsersService) {
    this.activeRouter.params.subscribe((urlId) => {
      let { iduser } = urlId
      this.userId = iduser
    })

    this.userServ.getUserByID(this.userId).subscribe((userdata) => {
      let data: any = userdata
      this.user = data.userData
      console.log(this.user)
    })
  }
}
