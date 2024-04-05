import { Component } from '@angular/core';
import { ProductsService } from '../../Services/Products/products.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Isubcategory } from '../../app/Models/isubcategory';
import { Iproduct } from '../../app/Models/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Iproduct[] = []
  constructor(private productService: ProductsService, private router: Router) {
    this.productService.getAllProducts().subscribe((data) => {

      this.products = data


    })
  }

  onClickGoToDetails(id: any) {
    this.router.navigate(["product-details", id])
  }

  onClickDeleteProduct(idProduct: string) {
    let checkDelete = confirm("Are you Want To Delete Product With id : " + idProduct)
    if (checkDelete) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
        this.products = this.products.filter(product => {
          return product._id != idProduct
        })
      })
    }
  }
  onClickUpdateProduct(idProduct: string) {
    this.router.navigate(["product-update", idProduct])
  }

}
