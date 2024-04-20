import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../app/Models/iproduct';
import { Isubcategory } from '../../app/Models/isubcategory';
import { SubCategoriesServiceService } from '../Sub-Categories/sub-categories-service.service';
import { environment } from '../../environments/environment.development';
import { UsersService } from '../UserService/users.service';
import { User } from '../../app/Models/user';

interface test {
  iduser: string
  name: String
  productNumber: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsData !: Iproduct[]
  subcategory!: Isubcategory[]
  constructor(private httpclient: HttpClient, private subCategoryService: SubCategoriesServiceService, private userService: UsersService) {
    this.getAllProducts().subscribe((Products) => {
      this.productsData = Products
    })

    this.subCategoryService.getAllSubCategories().subscribe((subcategory) => {
      this.subcategory = subcategory
    })

  }

  getAllProducts(): Observable<[Iproduct]> {
    return this.httpclient.get<[Iproduct]>(`${environment.EndPointUrl}products/get`)
  }

  getProductByID(id: string): Observable<Iproduct> {
    return this.httpclient.get<Iproduct>(`${environment.EndPointUrl}products/get/${id}`)
  }

  getProductBySubCategory(subCategoryId: string) {
    return this.productsData.filter(product => product.subCategoryId == subCategoryId).length
  }
  getallProductBySubCategory(subCategoryId: string) {
    return this.productsData.filter(product => product.subCategoryId == subCategoryId)
  }
  getProductWithID(idproduct: string) {
    return this.productsData.find((product: Iproduct) => product._id == idproduct)
  }
  updateProduct(id: string, product: Iproduct) {

    return this.httpclient.patch(`${environment.EndPointUrl}products/${id}`, product)

  }
  deleteProduct(idprod: string) {
    return this.httpclient.delete(`${environment.EndPointUrl}products/ ${idprod}`)
  }
  deleteAllProductsWithIdSeller(idseller: string) {
    return this.httpclient.delete(`${environment.EndPointUrl}products/userProducts/${idseller}`)
  }

}
/*
 



*/ 