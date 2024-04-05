import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../Services/UserService/users.service';
import { User } from '../../app/Models/user';
import { ProductsService } from '../../Services/Products/products.service';
import { Iproduct } from '../../app/Models/iproduct';

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
  produtUser!: Iproduct[]
  constructor(private activateRouter: ActivatedRoute, private userService: UsersService, private productServ: ProductsService, private router: Router) {

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

    this.productServ.getAllProducts().subscribe((products) => {
      this.produtUser = products.filter((prod: Iproduct) => prod.sellerId == this.idUser)
      console.log(this.produtUser)
    })
  }
  productDetials(idProd: string) {
    console.log(idProd)
    this.router.navigate(["product-details", idProd])
  }
}
