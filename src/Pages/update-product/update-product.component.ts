import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../Services/Products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../app/Models/iproduct';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  productForm !: FormGroup;
  productId!: string;
  product!: Iproduct;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('idprod') || '0'
    });
    console.log(this.productService.getProductWithID(this.productId));

  }
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      // Add other form controls for other product properties
    });

  }
  updateProduct(): void {
    if (this.productForm.valid) {
      const updatedProduct: Iproduct = { ...this.product, ...this.productForm.value };
      this.productService.updateProduct(this.productId, updatedProduct).subscribe(() => {
        console.log('Product updated successfully');
        this.router.navigate(['/products']); // Redirect to the product list page
      });
    }
  }
}
