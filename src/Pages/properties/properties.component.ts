import { Component } from '@angular/core';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { Iproduct } from '../../app/Models/iproduct';
import { ProductsService } from '../../Services/Products/products.service';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { Isubcategory } from '../../app/Models/isubcategory';
import { ProductsComponent } from '../products/products.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

  product: Iproduct[] = []
  SearchProd: Iproduct[] = []
  subcategoryOfProperties !: Isubcategory[]
  constructor(private productService: ProductsService, private subCateServ: SubCategoriesServiceService, private router: Router) {

    this.subCateServ.getAllSubCategories().subscribe(data => {
      this.subcategoryOfProperties = data.filter((sub: Isubcategory) => sub.categoryId.name == "Properties")
      console.log(this.subcategoryOfProperties)
      this.subcategoryOfProperties.map((subc: Isubcategory) => {

        this.productService.productsData.filter((prod) => {
          if (prod.subCategoryId == subc._id) {
            this.product.push(prod)
          }
        })
        this.SearchProd = this.product
      })

    })

  }
  Search(event: Event) {
    this.SearchProd = []
    let value = document.querySelector("input")?.value
    this.product.filter(prod => {
      if (prod.name.toLowerCase().match(`${value?.toLowerCase()}`)) {
        this.SearchProd.push(prod)
        return
      }
    })
    console.log(this.SearchProd);

  }
  onClickGoToDetails(id: string) {
    this.router.navigate(["product-details", id])
  }
  onClickDeleteProduct(id: string) {
    let checkDelete = confirm("Are you Want To Delete Product With id : " + id)
    if (checkDelete) {
      let x = this.productService.deleteProduct(id).subscribe((res) => {
        if (res) {
          this.router.navigate(["/products"])
        }
      })
    }
  }
  onClickUpdateProduct(id: string) {
    this.router.navigate(["product-update", id])
  }
}
