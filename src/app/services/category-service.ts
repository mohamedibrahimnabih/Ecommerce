import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
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

    GetAll(): Category[] {
      return this.categoies;
    }
}
