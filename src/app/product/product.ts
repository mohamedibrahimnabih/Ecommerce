import { Component } from '@angular/core';
import { ProductResponse } from '../models/product';
import { Category } from '../models/category';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
// Call API => https://localhost:7270/Admin/Products

  products: ProductResponse[];

  categoies: Category[];

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

  decreaseQuantiy(product: ProductResponse, quantity: number) {
    // const product = this.products.find(e=>e.id === productId);

    if(product != null && product.quantity - quantity > 0){
      product.quantity -= quantity;
    }

  }
}
