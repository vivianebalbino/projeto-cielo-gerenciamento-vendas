import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface StoreSummary{
  title: string;
  value: string;
  color: string;
  icon: string;
  isCurrency: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([
      { title: "Valor Total Vendas", value: "313388", color: "primary", icon: "currency_exchange", isCurrency: true},
      { title: "Valor Líquido", value: "301847.02", color: "accent", icon: "currency_exchange", isCurrency: true },
      { title: "Valor Médio", value: "202.71",  color: "warn",  icon: "currency_exchange", isCurrency: true },
      { title: "Quantidade Total", value: "1546", color: "primary", icon: "bar_chart", isCurrency: false }
    ]);
  }
}