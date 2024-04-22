import { Component } from '@angular/core';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.sass'
})
export class SubCategoryComponent {
  subCategoryData: any
  constructor(private subCategoryService: SubCategoriesServiceService, private router: Router) {
    this.subCategoryService.getAllSubCategories().subscribe((data) => {

      this.subCategoryData = data
    })
  }
  navigateProdSubCat(page: string, idsub: string) {
    this.router.navigate([page, idsub])
  }

}
