import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsData !: Iproduct[]
  constructor(private httpclient: HttpClient) {
    this.getAllProducts().subscribe((Products) => {
      this.productsData = Products
    })

  }

  getAllProducts(): Observable<[Iproduct]> {
    return this.httpclient.get<[Iproduct]>("http://localhost:3000/products/get")
  }

  getProductByID(id: string): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>("http://localhost:3000/products/get/" + id)
  }
  getProductByCategory(subCategoryId: string) {
    console.log(subCategoryId)
    console.log(this.productsData)
  }

}
