import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Isubcategory } from '../../app/Models/isubcategory';
import { environment } from '../../environments/environment.development';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesServiceService {

  SubcategoryBehavoior = new BehaviorSubject<Isubcategory[]>([])
  nameCategory = ["Cars", "mobiles", "electronic"]

  constructor(private httpclient: HttpClient,) {
    this.getAllSubCategories().subscribe(data => {
      this.SubcategoryBehavoior.next(data)
    })
    this.SubcategoryBehavoior.subscribe(value => value)
  }

  getAllSubCategories(): Observable<[Isubcategory]> {
    return this.httpclient.get<[Isubcategory]>(`${environment.EndPointUrl}sub-category`)
  }

  getsubCategoryByID(id: string): Observable<Isubcategory> {
    return this.httpclient.get<Isubcategory>(`${environment.EndPointUrl}sub-category/getId/${id}`)
  }

}
