import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../../models/product.model';
import * as fromRoot from '../../../state/app.state';

export interface State extends fromRoot.State {
    product: ProductState;
}
const getProductFeatureState = createFeatureSelector<ProductState>('product');

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
);
