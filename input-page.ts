import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  standalone: false,
  templateUrl: './input-page.html',
  styleUrl: './input-page.css'
})
export class InputPageComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(0.01)]],
      inStock: [false]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.setProductData(this.productForm.value);
      this.router.navigate(['/output']);
    }
  }
}
