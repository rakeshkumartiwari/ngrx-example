import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../product/state/product.reducer';
import * as productActions from '../../product/state/product.actions';
import { ProductService } from '../product.service';
import { Product } from './product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayCode: boolean;
  fruitList: Product[];
  errorMassage$: Observable<string>;
  constructor(private store: Store<fromProduct.State>, private productSvc: ProductService) { }

  ngOnInit() {
    this.store.pipe(select(fromProduct.getShowProductCode)).subscribe(
      showProductCode => this.displayCode = showProductCode
    );

    this.errorMassage$ = this.store.pipe(select(fromProduct.getError));
    this.store.dispatch(new productActions.Load());
    this.store.pipe(select(fromProduct.getProducts)).subscribe(
      (fruitList: Product[]) => this.fruitList = fruitList
    );

  }

  onChange(value: boolean) {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

}
