import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ChartsComponentComponent } from '../../app/Components/charts-component/charts-component.component';
import { UsersService } from '../../Services/UserService/users.service';
import { CategoriesServiceService } from '../../Services/Categories/categories-service.service';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { ProductsService } from '../../Services/Products/products.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterModule, ChartsComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  usersNum: any
  CategoryNum: any
  subCategoryNum: any
  productsNum: any
  constructor(
    private userService: UsersService,
    private categoryService: CategoriesServiceService,
    private subCategoryService: SubCategoriesServiceService,
    private productsService: ProductsService) {


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

}
