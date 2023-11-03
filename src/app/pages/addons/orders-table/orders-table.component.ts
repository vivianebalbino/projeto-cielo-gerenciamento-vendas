import { AfterViewInit, Component, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Order, OrderService } from 'src/app/services/orders/orders.service';
import { OrdersTableDataSource } from './orders-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
  providers:    [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class OrdersTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Order>;
  dataSource!: OrdersTableDataSource;
  dataLength!: number;
  errorMessage!: string;
  event: any;

  displayedColumns = [
    "id",
    "paymentType",
    "cardBrand",
    "netAmount",
    "channel",
    "status",
  ];

  constructor(private orderService: OrderService){}

  ngOnInit() {
    this.dataSource = new OrdersTableDataSource(this.orderService);
    this.orderService.getOrderCount().subscribe({
      next: (orderCount: number) => {
        this.dataLength = orderCount;
      },
    });
  }

 

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}