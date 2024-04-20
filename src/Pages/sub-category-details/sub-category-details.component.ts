import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../app/Models/iproduct';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { ProductsService } from '../../Services/Products/products.service';
import { CommonModule } from '@angular/common';
import { Isubcategory } from '../../app/Models/isubcategory';

@Component({
  selector: 'app-sub-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-category-details.component.html',
  styleUrl: './sub-category-details.component.scss'
})
export class SubCategoryDetailsComponent {

  idSubCat: string = ''
  productSubCat: Iproduct[] = []
  constructor(private activeRoute: ActivatedRoute, private productSer: ProductsService, private router: Router, private subcatServ: SubCategoriesServiceService) {
    this.activeRoute.paramMap.subscribe((param) => {
      this.idSubCat = param.get('idsub') || '0'
      this.productSubCat = this.productSer.getallProductBySubCategory(this.idSubCat)
    })

    this.subcatServ.SubcategoryBehavoior.subscribe((allsub) => {


    })

  }


  onClickGoToDetails(id: string) {
    this.router.navigate(["product-details", id])
  }
  onClickDeleteProduct(id: string) {
    let checkDelete = confirm("Are you Want To Delete Product With id : " + id)
    if (checkDelete) {
      let x = this.productSer.deleteProduct(id).subscribe((res) => {
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
