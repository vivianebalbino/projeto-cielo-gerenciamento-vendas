import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Order {
  id: string;
  paymentType: string;
  cardBrand: string;
  netAmount: number;
  channel: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getOrders(
    offset: number,
    pageSize: number,
    sortField: string,
    sortDirection: string
  ): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      map((response) => {
        return this.getPagedData(
          this.getSortedData(response, sortField, sortDirection),
          offset,
          pageSize
        );
      }),
      catchError(this.handleError)
    );
  }

  getOrderCount(): Observable<number> {
    return this.http.get<Order[]>(this.ordersUrl).pipe(
      map((response) => {
        return response.length;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    return throwError(errorMessage);
  }

  private getPagedData(data: Order[], startIndex: number, pageSize: number) {
    return data.splice(startIndex, pageSize);
  }

  private getSortedData(data: Order[], active: string, direction: string) {
    if (!active || direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = direction === 'asc';
      switch (active) {
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        case 'date':
          return compare(+a.paymentType, +b.paymentType, isAsc);
        case 'name':
          return compare(+a.cardBrand, +b.cardBrand, isAsc);
        case 'status':
          return compare(+a.netAmount, +b.netAmount, isAsc);
        case 'orderTotal':
          return compare(+a.channel, +b.channel, isAsc);
        case 'paymentMode':
          return compare(+a.status, +b.status, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
