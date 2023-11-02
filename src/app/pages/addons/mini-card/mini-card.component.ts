import { Component, Input, OnInit,LOCALE_ID  } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss'],
  providers:    [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
})
export class MiniCardComponent implements OnInit {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() value!: string;
  @Input() color!: string;
  @Input() isIncrease!: boolean;
  @Input() isCurrency!: boolean;
  @Input() duration!: string;
  @Input() string!: number;
 

  constructor() { }

  ngOnInit(): void {
  }

}
