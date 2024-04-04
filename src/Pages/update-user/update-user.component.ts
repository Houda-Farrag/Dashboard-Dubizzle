import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  user!: User
  userId!: string
  constructor(private activeRouter: ActivatedRoute, private userServ: UsersService) {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      console.log(paramMap.get("iduser"))
    })

    this.userServ.getUserByID(this.userId).subscribe((userdata) => {
      this.user = userdata
      console.log(this.user)
    })
  }
}
