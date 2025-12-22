import { Component, signal } from '@angular/core';
import { Product } from './models/product';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Call API => https://localhost:7270/Admin/Products

  products: Product[];

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
        discount: 5,
        rate: 4.6,
        quantity: 44,
        categoryId: 4
      },
      {
        id: 2,
        name: 'Iphone 11 pro',
        description: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        mainImg: 'assets/images/product_images/img2.png',
        status: true,
        price: 290,
        discount: 7,
        rate: 4.7,
        quantity: 56,
        categoryId: 4
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        description: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        mainImg: 'assets/images/product_images/img3.png',
        status: true,
        price: 295,
        discount: 6,
        rate: 4.6,
        quantity: 99,
        categoryId: 4
      }

    ];
  }
}
