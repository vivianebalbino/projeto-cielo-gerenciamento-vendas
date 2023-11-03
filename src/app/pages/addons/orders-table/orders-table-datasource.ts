import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Order, OrderService } from 'src/app/services/orders/orders.service';

export class OrdersTableDataSource extends DataSource<Order> {
  paginator!: MatPaginator;
  sort!: MatSort;

  constructor(private orderService: OrderService) {
    super();
  }

  connect(): Observable<Order[]> {
    const dataMutations = [
      of('Initial load'),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(dataMutations).pipe(mergeMap(() => {
      return this.orderService.getOrders(
        0,
        10,
        this.sort.active,
        this.sort.direction
        );
    }));
  }

  disconnect() {}
}