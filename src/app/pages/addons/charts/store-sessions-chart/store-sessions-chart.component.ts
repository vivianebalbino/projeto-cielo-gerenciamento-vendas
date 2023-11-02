import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-store-sessions-chart',
  templateUrl: './store-sessions-chart.component.html'
})
export class StoreSessionsChartComponent {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40, 30, 50, 120, 35, 180 ], label: 'Crédito à vista' },
      { data: [ 28, 48, 40, 19, 86, 27, 90, 98, 30, 50, 80, 220 ], label: 'Crédito parcelado loja' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
}
