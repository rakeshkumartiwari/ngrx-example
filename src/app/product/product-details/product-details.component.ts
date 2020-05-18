import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Fruit, ProductDetails } from '../product-entities';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  fruitFrom: FormGroup;
  isCancel: boolean;
  subscription: Subscription[] = [];

  constructor(private fb: FormBuilder, private productSvc: ProductService) { }

  ngOnInit() {
    this.fruitFrom = this.fb.group({
      id: null,
      fruitName: '',
      fruitCode: null
    });
    this.isCancel = true;
    this.subscription.push(this.productSvc.geProductDetails.subscribe((product: ProductDetails) => {
      this.isCancel = product.isCancel;
      this.fruitFrom.patchValue({ fruitName: product.fruitDetails.fruitName, fruitCode: product.fruitDetails.fruitCode });
    }));
  }

  ngOnDestroy() {
    if (this.subscription && this.subscription.length) {
      this.subscription.forEach(item => item.unsubscribe());
    }
  }

  onCancel() {
    this.isCancel = true;
  }
}
