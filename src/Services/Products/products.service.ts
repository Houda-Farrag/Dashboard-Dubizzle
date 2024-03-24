import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private httpclient: HttpClient) {
  }

  getAllProducts(): Observable<[Iproduct]> {
    return this.httpclient.get<[Iproduct]>("http://localhost:3000/products/get")
  }

}
