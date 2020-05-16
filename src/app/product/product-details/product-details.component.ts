import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Fruit, ProductDetails } from '../product-entities';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  fruitFrom: FormGroup;
  isCancel: boolean;

  constructor(private fb: FormBuilder, private productSvc: ProductService) { }

  ngOnInit() {
    this.fruitFrom = this.fb.group({
      id: null,
      fruitName: '',
      fruitCode: null
    });
    this.isCancel = true;
    this.productSvc.geProductDetails.subscribe((product: ProductDetails) => {
      this.isCancel = product.isCancel;
      this.fruitFrom.patchValue({ fruitName: product.fruitDetails.fruitName, fruitCode: product.fruitDetails.fruitCode });
    });
  }

  onCancel() {
    this.isCancel = true;
  }
}
