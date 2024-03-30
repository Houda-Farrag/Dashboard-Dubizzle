import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { SubCategoriesServiceService } from '../../../Services/Sub-Categories/sub-categories-service.service';
import { color } from 'highcharts';
import { Isubcategory } from '../../Models/isubcategory';
import { ProductsService } from '../../../Services/Products/products.service';

import * as Highcharts from 'highcharts';
@Component({
  selector: 'charts-component',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts-component.component.html',
  styleUrls: ['./charts-component.component.scss']
})
export class ChartsComponentComponent implements OnInit {
  subCategory: Isubcategory[] = [];

  Highcharts = Highcharts;
  chartOptions = {};
  userChart !: Chart
  constructor(private subCategoryService: SubCategoriesServiceService, private productServ: ProductsService) {

  }
  ngOnInit(): void {

    this.subCategoryService.getAllSubCategories().subscribe(allSubCat => {
      const series = allSubCat.map(subcat => {

        return {
          name: subcat.name,
          y: this.productServ.getProductBySubCategory(subcat._id)
        }
      })

      this.chartOptions = {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Product SubCategories'
        }, plotOptions: {
          series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
              enabled: true,
              distance: 20
            }, {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.1f}%',
              style: {
                fontSize: '1.2em',
                textOutline: 'none',
                opacity: 0.7
              },
              filter: {
                operator: '>',
                property: 'percentage',
                value: 10
              }
            }]
          }
        },
        series: [{
          name: 'products',
          data: series
        }]
      };
      this.userChart = new Chart(this.chartOptions)
    })


  }

}

















// @Component({
//   selector: 'charts-component',
//   standalone: true,
//   imports: [ChartModule],
//   templateUrl: './charts-component.component.html',
//   styleUrl: './charts-component.component.scss'
// })
// export class ChartsComponentComponent {
//   subCategory: Isubcategory[] = []
//   subCategoryProductsNumber: any
//   userChart: Chart | undefined;

//   dataChart = []
//   constructor(private subCategoryService: SubCategoriesServiceService, private productServ: ProductsService) {
//     this.initializeChart()
//     this.subCategoryService.SubcategoryBehavoior.subscribe(value => {
//       this.subCategory = value
//       this.updateChart();
//     })

//     // this.subCategoryService.getAllSubCategories().subscribe((data) => {
//     //   this.subCategory = data.map(sub => sub)
//     //   this.ll(this.subCategory)
//     // })
//   }

//   // Initialize the chart with empty data
//   initializeChart() {
//     this.userChart = new Chart({
//       title: {
//         text: 'SubCategory products'
//       },
//       tooltip: {
//         valueSuffix: '%'
//       },
//       plotOptions: {
//         series: {
//           allowPointSelect: true,
//           cursor: 'pointer'
//         }
//       },
//       series: [
//         {
//           type: 'pie',
//           data: []
//         }
//       ]
//     });
//   }
//   // userChart = new Chart({
//   //   title: {
//   //     text: 'SubCategory products'
//   //   }, tooltip: {
//   //     valueSuffix: '%'
//   //   }, plotOptions: {
//   //     series: {
//   //       allowPointSelect: true,
//   //       cursor: 'pointer',
//   //     }
//   //   },
//   //   series: [
//   //     {
//   //       type: "pie",
//   //       data: [
//   //         { name: "sub.name", y: 1, color: "red" },
//   //         { name: "sub.name", y: this.productServ.getProductBySubCategory(this.subCategory[0]._id), color: "blue" },

//   //       ]
//   //     }

//   //   ]
//   // })

//   ll(subCatData: Isubcategory[]) {

//     return subCatData.map((sub) => {

//       return { name: sub.name, y: this.productServ.getProductBySubCategory(sub._id), color: "red" }

//     })

//   }

//   updateChart() {
//     if (this.subCategory.length > 0) {
//       const chartData = this.subCategory.map(sub => ({
//         name: sub.name,
//         y: this.productServ.getProductBySubCategory(sub._id),
//         color: 'red'
//       }));
//       this.userChart.options.series[0].data = chartData; // Update the chart data
//       this.userChart.reflow(); // Refresh the chart
//     } else {
//       // Handle the case when subCategory is empty
//       this.initializeChart();
//     }
//   }

// }
