import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { SalesService } from 'src/app/services/sales/sales.service';
 
@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
})
export class AnnualSalesChartComponent implements OnInit {

  constructor(private salesService: SalesService) {}
  
  ngOnInit(): void {
    this.salesService.getSalesByMonth().subscribe(
      {
        next: salesItem => {
          salesItem.forEach(li => {
            this.lineChartData.datasets[0].data.push(li.revenue);
            this.lineChartData.labels?.push(li.month);
          })
        }
      }
    );
  }
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Vendas Total',
        fill: true,
        tension: 0.5,
        borderColor: '#353a40',
        backgroundColor: '#00aeef',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;
}