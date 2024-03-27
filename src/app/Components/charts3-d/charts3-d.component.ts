import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
// import Highcharts from 'highcharts';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-charts3-d',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './charts3-d.component.html',
  styleUrl: './charts3-d.component.scss'
})
export class Charts3DComponent {
  pie = new Chart({

  })
}
