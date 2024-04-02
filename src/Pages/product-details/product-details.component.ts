import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/Products/products.service';
import { CommonModule } from '@angular/common';
import { Isubcategory } from '../../app/Models/isubcategory';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { SliderComponent } from '../../app/Components/slider/slider.component';
import { Iproduct } from '../../app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, SliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  idProduct: any
  product!: Iproduct
  subCategoryName: string = ''
  constructor(private router: Router, private activateRouter: ActivatedRoute, private productService: ProductsService, private subCatService: SubCategoriesServiceService) {

    this.activateRouter.params.subscribe((data) => {
      this.idProduct = data

    })

  }
  ngOnInit(): void {
    this.productService.getProductByID(this.idProduct.idprod).subscribe((data) => {
      let prod: any = data
      this.product = prod.product
      console.log(this.product)

      this.subCatService.SubcategoryBehavoior.subscribe(value => {
        let [Name] = value.filter(sub => { return sub._id == this.product.subCategoryId })
        this.subCategoryName = Name.name
      })

    })
  }

  update(id: string) {

    this.router.navigate(["product-update", id])
  }
  delete(id: string) {
    let checkDelete = confirm("Are you Want To Delete Product With id : " + id)
    if (checkDelete) {
      let x = this.productService.deleteProduct(id).subscribe((res) => {
        console.log("response: ", res)
      })
      console.log("observable:", x)
      this.router.navigate(["/products"])
    }
  }
}
