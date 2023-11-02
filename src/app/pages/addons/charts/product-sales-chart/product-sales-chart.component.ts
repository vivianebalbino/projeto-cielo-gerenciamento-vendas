import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
})
export class ProductSalesChartComponent {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Super Link / Digitada',
    'Máquina',
    'Ecommerce',
  ];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    { data: [65, 120, 30], label: 'Aprovada' },
    { data: [28, 28, 40], label: 'Negada' },
    { data: [40, 68, 80], label: 'Pendente' },
  ];
}
