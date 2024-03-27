import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-product-charts',
  standalone: true,
  imports: [ChartModule,],
  templateUrl: './product-charts.component.html',
  styleUrl: './product-charts.component.scss'
})
export class ProductChartsComponent {

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
