import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from '../../app/Models/icategory';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  quote = new BehaviorSubject<string>('Hello world');
  constructor(private httpclient: HttpClient) {

  }

  getAllCategories(): Observable<[Icategory]> {
    return this.httpclient.get<[Icategory]>(`${environment.EndPointUrl}categories`)
  }


}
