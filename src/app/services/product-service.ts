import { Injectable } from '@angular/core';
import { ProductResponse } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products: ProductResponse[];
  
    constructor(){
      this.products = [

      {
        id: 1,
        name: 'iphone 11',
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

    }

    GetAll(): ProductResponse[] {
      return this.products;
    }

    GetById(id: number): ProductResponse | undefined {
      return this.products.find(p => p.id === id);
    }

    Create(product: ProductResponse): void {
      this.products.push(product);
    }

    Update(updatedProduct: ProductResponse): void {
      const index = this.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
      }
    }

    Remove(id: number): void {
      this.products = this.products.filter(p => p.id !== id);
    }
}
 