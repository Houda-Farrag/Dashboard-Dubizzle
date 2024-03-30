import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Chart, ChartModule } from 'angular-highcharts';
import Highcharts from 'highcharts';
import { SubCategoriesServiceService } from '../../../Services/Sub-Categories/sub-categories-service.service';
import { ProductsService } from '../../../Services/Products/products.service';
import { Isubcategory } from '../../Models/isubcategory';

@Component({
  selector: 'app-product-charts',
  standalone: true,
  imports: [ChartModule,],
  templateUrl: './product-charts.component.html',
  styleUrl: './product-charts.component.scss'
})
export class ProductChartsComponent implements OnInit {
  subCategory: Isubcategory[] = [];

  Highcharts = Highcharts;
  chartOptions = {};
  subCatColumnChart !: Chart
  constructor(private subCategoryService: SubCategoriesServiceService, private productServ: ProductsService) {

  }
  ngOnInit(): void {

    this.subCategoryService.getAllSubCategories().subscribe(allSubCat => {
      const catName = allSubCat.map(sub => {
        return sub.name
      })
      const series = allSubCat.map(subcat => {
        return {
          name: subcat.name,
          y: this.productServ.getProductBySubCategory(subcat._id)
        }
      })

      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Product',

        },
        xAxis: {
          categories: catName,
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Product Number'
          }

        },
        tooltip: {
          valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          },
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
      this.subCatColumnChart = new Chart(this.chartOptions)
    })
  }


  colChart = new Chart({
    series: [
      {
        type: 'column',

        data: [
          { name: "first", y: 5, color: "#ffaabb" },
          { name: "second", y: 1, color: "#9344bb" },
          { name: "third", y: 1, color: "#ff22bb" },
          { name: "fourth", y: 1, color: "#ccaabb" },
          { name: "five", y: 1, color: "#00aabb" }

        ],

      }]
  })


}

