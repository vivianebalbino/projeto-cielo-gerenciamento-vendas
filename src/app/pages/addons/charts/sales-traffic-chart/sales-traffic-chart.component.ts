import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
})
export class SalesTrafficChartComponent {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [
    'Mastercard',
    'Elo',
    'Visa',
    'Hipercard',
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
