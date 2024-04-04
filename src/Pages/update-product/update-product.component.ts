import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../Services/Products/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../app/Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  productForm !: FormGroup;
  productId!: string;
  product: Iproduct;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.paramMap.subscribe(params => {
      this.productId = params.get('idprod') || '0'
    });

    let data: any = this.productService.getProductWithID(this.productId)
    this.product = data
    console.log(this.product)
  }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      name: [`${this.product.name}`, Validators.required],
      description: [`${this.product.description}`, Validators.required],
      price: [`${this.product.price}`, Validators.required],
      price_type: [`${this.product.price_type}`, Validators.required],
      location: [`${this.product.location}`, Validators.required],
      propertyType: [`${this.product.propertyType}`, Validators.required],
      area: [`${this.product.area}`, Validators.required],
      phoneNumber: [`${this.product.phoneNumber}`, Validators.required],
      model: [`${this.product.model}`, Validators.required],
      bedRooms: [`${this.product.bedRooms}`, Validators.required],
      bathRooms: [`${this.product.bathRooms}`, Validators.required],

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


  onSubmit() {
    console.log(this.product)
  }



}
