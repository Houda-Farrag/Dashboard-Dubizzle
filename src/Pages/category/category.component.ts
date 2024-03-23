import { Component } from '@angular/core';
import { CategoriesServiceService } from '../../Services/Categories/categories-service.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.sass'
})
export class CategoryComponent {
  CategoryData: any

  constructor(private categoryService: CategoriesServiceService) {
    categoryService.getAllCategories().subscribe((data) => {
      this.CategoryData = data
      console.log(data)
    })
  }

}
