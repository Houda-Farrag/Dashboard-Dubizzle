import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/Products/products.service';
import { CommonModule } from '@angular/common';
import { Isubcategory } from '../../app/Models/isubcategory';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  idProduct: any
  product: any
  subCategoryName: string = ''
  constructor(private router: Router, private activateRouter: ActivatedRoute, private productService: ProductsService, private subCatService: SubCategoriesServiceService) {

    this.activateRouter.params.subscribe((data) => {
      this.idProduct = data
      this.productService.getProductByID(this.idProduct.idprod).subscribe((data) => {

        let prod: any = data
        this.product = prod.product

        this.subCatService.SubcategoryBehavoior.subscribe(value => {
          let [Name] = value.filter(sub => { return sub._id == this.product.subCategoryId })
          this.subCategoryName = Name.name
        })

      })
    })

  }

  update(id: string) {
    alert('update')
    this.router.navigate(["product-update", id])
  }
  delete(id: string) {
    alert("dlete product" + id)
  }
}
