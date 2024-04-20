import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { ChartsComponentComponent } from '../../app/Components/charts-component/charts-component.component';
import { UsersService } from '../../Services/UserService/users.service';
import { CategoriesServiceService } from '../../Services/Categories/categories-service.service';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { ProductsService } from '../../Services/Products/products.service';
import { ProductChartsComponent } from '../../app/Components/product-charts/product-charts.component';
import { CommonModule } from '@angular/common';
import { Charts3DComponent } from '../../app/Components/charts3-d/charts3-d.component';
import { User } from '../../app/Models/user';
import { Iproduct } from '../../app/Models/iproduct';

interface test {
  id: string
  name: String
  prodNum: number
}
@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule, ChartsComponentComponent, ProductChartsComponent, CommonModule, Charts3DComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {
  togle = false
  usersNum: any = ""
  CategoryNum: any = ""
  subCategoryNum: any = ""
  productsNum: any = ""
  bestUser: test[] = []
  constructor(
    private userService: UsersService,
    private categoryService: CategoriesServiceService,
    private subCategoryService: SubCategoriesServiceService,
    private productsService: ProductsService, private router: Router) {
    try {
      this.getBestUser()

    } catch (error) {
      console.log(error);

    }

    this.usersNum = this.userService.getAllUsers().subscribe((data) => {
      this.usersNum = data.length
    })

    this.categoryService.getAllCategories().subscribe((data) => {
      this.CategoryNum = data.length
    })

    this.subCategoryService.getAllSubCategories().subscribe((data) => {

      this.subCategoryNum = data.length

    })
    this.productsService.getAllProducts().subscribe((data) => {
      this.productsNum = data.length
    })


  }
  ngOnInit(): void {


  }

  togleButton(event: Event) {
    event.stopPropagation();
    console.log('clicked')
  }
  navigate(page: string) {
    this.router.navigate([`${page}`])
  }

  async getBestUser() {
    let y: test[] = []
    let max: test = { id: '0', name: '', prodNum: 0 }
    let arrrayUsers: test[] = await []
    this.userService.getAllUsers().subscribe(res => {
      res.forEach((user) => {
        // console.log(
        //   user._id, user.profile.name, this.getPoductsUser(user._id)
        // );
        arrrayUsers.push({ id: user._id, name: user.profile.name, prodNum: this.getPoductsUser(user._id) })
      })


      arrrayUsers[0] = { id: '0', name: '', prodNum: 0 }
      arrrayUsers.forEach((value, index, array) => {
        if (max.prodNum < value.prodNum) {
          max = value
        }
      })
      // console.log(arrrayUsers.filter((data: test) => data.prodNum === max.prodNum));
      this.bestUser = arrrayUsers.filter((data: test) => data.prodNum === max.prodNum)
    })
  }

  getPoductsUser(id: string) {
    let productUser: Iproduct[] = []
    this.productsService.productsData.filter(
      (prod: Iproduct) => {
        if (prod.sellerId == id) {
          productUser.push(prod)
        }
      })
    return productUser.length
  }

}
