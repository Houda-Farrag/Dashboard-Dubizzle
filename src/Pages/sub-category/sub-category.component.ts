import { Component } from '@angular/core';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.sass'
})
export class SubCategoryComponent {
  subCategoryData: any
  constructor(private subCategoryService: SubCategoriesServiceService) {
    this.subCategoryService.getAllSubCategories().subscribe((data) => {
      console.log(data)
      this.subCategoryData = data
    })
  }


}
