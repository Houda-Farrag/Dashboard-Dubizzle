import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { SubCategoriesServiceService } from '../../../Services/Sub-Categories/sub-categories-service.service';
import { color } from 'highcharts';



@Component({
  selector: 'charts-component',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts-component.component.html',
  styleUrl: './charts-component.component.scss'
})
export class ChartsComponentComponent {
  constructor(private subCategoryService: SubCategoriesServiceService) {
    console.log(this.subCategoryService.nameCategory)
    console.log(this.userChart)
  }

  userChart = new Chart({
    series: [
      {
        type: "pie",
        data: this.ll(this.subCategoryService.nameCategory)
      }

    ]
  })

  ll(names: any) {
    let data = []
    let colors = ["blue", "green", "red", 'orange']
    for (let index = 0; index < names.length; index++) {
      data[index] = { name: names[index], y: 4, color: colors[index] }
    }
    return data
  }
}
