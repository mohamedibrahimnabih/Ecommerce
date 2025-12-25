import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../product/product";
import { Category } from '../models/category';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TotalPrice } from "../total-price/total-price";

@Component({
  selector: 'app-home',
  imports: [Product, UpperCasePipe, FormsModule, TotalPrice],
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

  // @ViewChild('categorySelect') categorySelect!: ElementRef;

  // @ViewChild(Product) productComponent!: ElementRef;
}
