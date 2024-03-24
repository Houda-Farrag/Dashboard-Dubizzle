import { Component } from '@angular/core';
import { ProductsService } from '../../Services/Products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any
  constructor(private productService: ProductsService) {
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data)
      this.products = data
    })
  }
}
