import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../app/Models/iproduct';
import { Isubcategory } from '../../app/Models/isubcategory';
import { SubCategoriesServiceService } from '../Sub-Categories/sub-categories-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsData !: Iproduct[]
  subcategory!: Isubcategory[]
  constructor(private httpclient: HttpClient, private subCategoryService: SubCategoriesServiceService) {
    this.getAllProducts().subscribe((Products) => {
      this.productsData = Products
    })

    this.subCategoryService.getAllSubCategories().subscribe((subcategory) => {
      this.subcategory = subcategory
    })

  }

  getAllProducts(): Observable<[Iproduct]> {
    return this.httpclient.get<[Iproduct]>("http://localhost:3000/products/get")
  }

  getProductByID(id: string): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>("http://localhost:3000/products/get/" + id)
  }

  getProductBySubCategory(subCategoryId: string) {
    return this.productsData.filter(product => product.subCategoryId == subCategoryId).length

  }
  getProductWithID(idproduct: string) {

    return this.productsData.find(product => product._id == idproduct)
  }
  updateProduct(id: string, product: Iproduct) {
    return this.httpclient.patch("http://localhost:3000/products/" + id, product)
  }
  deleteProduct(idprod: string) {
    return this.httpclient.delete("http://localhost:3000/products/" + idprod)
  }
  deleteAllProductsWithIdSeller(idseller: string) {
    return this.httpclient.delete("http://localhost:3000/products/userProducts/" + idseller)
  }
}
/*
 



*/ 