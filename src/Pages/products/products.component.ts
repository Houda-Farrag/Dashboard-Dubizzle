import { Component } from '@angular/core';
import { ProductsService } from '../../Services/Products/products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any
  constructor(private productService: ProductsService, private router: Router) {
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data)
      this.products = data
    })
  }

  print(id: any) {

    this.router.navigate(["product-details", id])
  }
}
