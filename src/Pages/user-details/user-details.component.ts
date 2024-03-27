import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  idUser: any
  userDetails !: User
  constructor(private activateRouter: ActivatedRoute, private userService: UsersService) {

    this.activateRouter.params.subscribe((urlId) => {
      let { iduser } = urlId
      this.idUser = iduser

      this.userService.getUserByID(this.idUser).subscribe((data) => {
        let uData: any = data
        let { userData } = uData
        this.userDetails = userData
        console.log(this.userDetails)
      })

    })
  }

}
