import { Component } from '@angular/core';
import { CategoriesServiceService } from '../../Services/Categories/categories-service.service';
import { CommonModule } from '@angular/common';
import { SubCategoriesServiceService } from '../../Services/Sub-Categories/sub-categories-service.service';
import { Isubcategory } from '../../app/Models/isubcategory';
import { SubCateCardComponent } from '../../app/Components/sub-cate-card/sub-cate-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, SubCateCardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.sass'
})
export class CategoryComponent {
  CategoryData: any
  SubCategoryOfCategory: Isubcategory[] = []
  constructor(private categoryService: CategoriesServiceService, private subCategoryServ: SubCategoriesServiceService, private router: Router) {
    categoryService.getAllCategories().subscribe((data) => {
      this.CategoryData = data
      console.log(data)
    })
  }

  details(idCat: string) {
    this.subCategoryServ.getAllSubCategories().subscribe(subCat => {
      console.log(subCat.filter((subcat) => subcat.categoryId._id == idCat));
      this.SubCategoryOfCategory = subCat.filter((subcat) => subcat.categoryId._id == idCat)
    })
  }

  navigate(id: string) {
    this.router.navigate(['sub-category-detials', id])
  }
}
