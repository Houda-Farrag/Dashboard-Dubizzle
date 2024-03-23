import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesServiceService {

  constructor(private httpclient: HttpClient) {

  }
  getAllCategories() {
    return this.httpclient.get("http://localhost:3000/sub-category")
  }
}
