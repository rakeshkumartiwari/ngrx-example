import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import {mergeMap, map} from 'rxjs/operators';
import { Product } from '../product/product';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productSvc: ProductService) {

    }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.ProductActionType.Load),
        mergeMap((action: productActions.Load) => this.productSvc.getData().pipe(
            map((products: Product[]) => (new productActions.LoadSuccess(products)))
        ))
    );
}