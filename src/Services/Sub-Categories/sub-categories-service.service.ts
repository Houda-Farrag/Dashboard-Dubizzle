import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isubcategory } from '../../app/Models/isubcategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesServiceService {

  nameCategory = ["Cars", "mobiles", "electronic"]
  constructor(private httpclient: HttpClient) {

  }
  getAllSubCategories(): Observable<[Isubcategory]> {
    return this.httpclient.get<[Isubcategory]>("http://localhost:3000/sub-category")
  }
}
