import { Component } from '@angular/core';
import { Product } from "../product/product";
import { Category } from '../models/category';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Product, UpperCasePipe, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  selectedId: number = 0;

  totalPrice: number = 0;

  categoies: Category[];

  constructor() {
    this.categoies = [
          {
            id: 1,
            name: 'Tablets'
          },
          {
            id: 2,
            name: 'PCs'
          },
          {
            id: 3,
            name: 'Computers'
          },
          {
            id: 4,
            name: 'Smart Phones'
          }
        ];
  }

  onTotalPriceChange(event: number) {
    
    this.totalPrice += event;
  }
}
