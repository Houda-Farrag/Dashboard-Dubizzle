import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../../app/Models/icategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  constructor(private httpclient: HttpClient) {

  }

  getAllCategories(): Observable<[Icategory]> {
    return this.httpclient.get<[Icategory]>("http://localhost:3000/categories")
  }


}
