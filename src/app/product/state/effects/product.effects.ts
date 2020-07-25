import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../product.service';
import * as productActions from '../actions/product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../../product/product';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productSvc: ProductService) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(productActions.Load),
        mergeMap(() => this.productSvc.getData().pipe(
            map((products: Product[]) => (productActions.LoadSuccess({payload: products}))),
            catchError(err => of(productActions.LoadFail(err.message)))
        ))
    );
}
