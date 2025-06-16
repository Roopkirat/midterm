import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-output-page',
  standalone: false,
  templateUrl: './output-page.html',
  styleUrl: './output-page.css'
})
export class OutputPageComponent implements OnInit {
  productData: any;

  constructor(private productService: ProductDataService) { }

  ngOnInit(): void {
    this.productData = this.productService.getProductData();
  }
}
