import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from "../product/product";
import { Category } from '../models/category';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TotalPrice } from "../total-price/total-price";
import { CategoryService } from '../services/category-service';

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

  constructor(private categoryService: CategoryService) {
    this.categoies = this.categoryService.GetAll();
  }

  onTotalPriceChange(event: number) {

    this.totalPrice += event;
  }

  // @ViewChild('categorySelect') categorySelect!: ElementRef;

  // @ViewChild(Product) productComponent!: ElementRef;
}
