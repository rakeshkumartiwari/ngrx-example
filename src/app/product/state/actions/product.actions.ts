import { Action, createAction, props } from '@ngrx/store';
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
    props<{  payload: Product[] }>()
);

export const LoadFail = createAction(
    '[Product] Load Fail',
    props<{ payload: string }>()
);
// export enum ProductActionType {
//     ToggleProductCode = '[product] Toggle Product Code',
//     Load = '[Product] Load',
//     LoadSuccess = '[Product] Load Success',
//     LoadFail = '[Product] Load Fail'
// }

// export class ToggleProductCode implements Action {
//     readonly type = ProductActionType.ToggleProductCode;
//     constructor(public payload: boolean) {
//     }
// }

// export class Load implements Action {
//     readonly type = ProductActionType.Load;
// }

// export class LoadSuccess implements Action {
//     readonly type = ProductActionType.LoadSuccess;

//     constructor(public payload: Product[]) {

//     }
// }

// export class LoadFail implements Action {
//     readonly type = ProductActionType.LoadFail;

//     constructor(public payload: string) {

//     }
// }

// export type ProductActions = ToggleProductCode | Load | LoadSuccess | LoadFail;
