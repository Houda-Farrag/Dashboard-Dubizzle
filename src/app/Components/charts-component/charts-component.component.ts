import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';



@Component({
  selector: 'charts-component',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts-component.component.html',
  styleUrl: './charts-component.component.scss'
})
export class ChartsComponentComponent {
  userChart = new Chart({
    series: [
      {
        type: "pie",
        data: [
          { name: "subcategory 1", y: 1, color: "blue" },
          { name: "subcategory 2", y: 1, color: "red" },
          { name: "subcategory 3", y: 1, color: "green" },

        ]
      }





    ]
  })
}
