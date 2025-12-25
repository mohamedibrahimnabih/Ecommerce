import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-price',
  imports: [],
  templateUrl: './total-price.html',
  styleUrl: './total-price.css',
})
export class TotalPrice {
  @Input() totalPrice: number = 0;
}
