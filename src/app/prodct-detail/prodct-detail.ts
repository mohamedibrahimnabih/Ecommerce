import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-service';
import { ProductResponse } from '../models/product';
import { CurrencyPipe, Location } from '@angular/common';

@Component({
  selector: 'app-prodct-detail',
  imports: [CurrencyPipe],
  templateUrl: './prodct-detail.html',
  styleUrl: './prodct-detail.css',
})
export class ProdctDetail implements OnInit {

  productId: string | null = null;

  product: ProductResponse | undefined;

  constructor(private service: ProductService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.product = this.service.GetById(Number(this.productId));
  }


  Back() {
    this.location.back();
  }

  Next() {
    // 1. find current index
    const currentIndex = this.service.GetIndexById(Number(this.productId));

    // 2. get all indexes
    const indexes = this.service.GetIndexes();

    // 3. get next index
    if(currentIndex >= indexes.length - 1) {
      return;
    }

    const nextIndex = indexes[currentIndex + 1];
    this.product = this.service.GetById(nextIndex);

    // 4. navigate to next index
    this.location.replaceState(`/Product/${nextIndex}`);

    console.log('Next Index:', nextIndex);
  }
}
