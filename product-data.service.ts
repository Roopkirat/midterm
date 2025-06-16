import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductData {
  private product: any;

  setProductData(productData: any) {
    this.product = productData;
  }

  getProductData() {
    return this.product;
  }
}
