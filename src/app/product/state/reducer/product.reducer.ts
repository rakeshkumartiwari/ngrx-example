import * as productAction from '../actions/product.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { ProductState } from '../../models/product.model';


export const PRODUCT_FEATURE_KEY = 'product';

const initialState: ProductState = {
    showProductCode: true,
    products: [],
    error: ''
};

export const reducerProduct = createReducer(initialState,
    on(productAction.ToggleProductCode, (state, { payload }: any) => {
        return {
            ...state,
            showProductCode: payload
        };
    }),
    on(productAction.LoadSuccess, (state, { payload }: any) => {
        return {
            ...state,
            products: payload,
            error: ''
        };
    }),
    on(productAction.LoadFail, (state, { payload }: any) => {
        return {
            ...state,
            products: [],
            error: payload
        };
    })


);

export function reducer(state: ProductState | undefined, action: Action) {
    return reducerProduct(state, action);
}
