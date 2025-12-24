import { Component } from '@angular/core';
import { ProductResponse } from '../models/product';
import { Category } from '../models/category';
import { FormsModule } from '@angular/forms';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
// Call API => https://localhost:7270/Admin/Products

  products: ProductResponse[];

  categoies: Category[];

  totalPrice: number = 0;

  selectedId: number = 0;

  constructor()
  {
    this.products = [

      {
        id: 1,
        name: 'Iphone 11',
        description: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        mainImg: 'assets/images/product_images/img1.png',
        status: true,
        price: 283,
        discount: 50,
        rate: 4.6,
        quantity: 0,
        categoryId: 3
      },
      {
        id: 2,
        name: 'Iphone 11 pro',
        description: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        mainImg: 'assets/images/product_images/img2.png',
        status: true,
        price: 290,
        discount: 51,
        rate: 4.7,
        quantity: 1,
        categoryId: 2
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        description: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        mainImg: 'assets/images/product_images/img3.png',
        status: true,
        price: 295,
        discount: 40,
        rate: 4.6,
        quantity: 99,
        categoryId: 4
      }

    ];

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

  getCategoryName(categoryId:number) {
    return this.categoies.find(e=>e.id === categoryId)?.name;
  }

  decreaseQuantiyAndCalcTotalPrice(product: ProductResponse, quantity: number) {
    // const product = this.products.find(e=>e.id === productId);

    if(product != null && product.quantity - quantity >= 0){
      product.quantity -= quantity;

      this.totalPrice += product.price * quantity;
    }

  }

  trackByItems(index: number, item: ProductResponse): number {
  return item.id;
}
}
