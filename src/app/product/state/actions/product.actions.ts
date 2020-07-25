import { createAction, props } from '@ngrx/store';
import { Product } from '../../product/product';

export const ToggleProductCode = createAction(
    '[product] Toggle Product Code',
    props<{ payload: boolean }>()
);

export const Load = createAction(
    '[Product] Load',
);

export const LoadSuccess = createAction(
    '[Product] Load Success',
    props<{ payload: Product[] }>()
);

export const LoadFail = createAction(
    '[Product] Load Fail',
    props<{ payload: string }>()
);

