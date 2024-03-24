import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/Products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  idProduct: any
  product: any

  constructor(private activateRouter: ActivatedRoute, private productService: ProductsService) {
    this.activateRouter.params.subscribe((data) => {
      this.idProduct = data


      this.productService.getProductByID(this.idProduct.idprod).subscribe((data) => {
        let prod: any = data
        this.product = prod.product
        console.log(this.product)
      })
    })
  }

}
