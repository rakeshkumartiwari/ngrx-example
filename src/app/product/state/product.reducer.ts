import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionType } from './product.actions';
import { Product } from '../product/product';

export interface State extends fromRoot.State {
    product: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    products: []
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

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionType.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
            case ProductActionType.LoadSuccess:
                return {
                    ...state,
                    products: action.payload
                };
        default:
            return state;
    }
}
