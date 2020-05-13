import { Action } from '@ngrx/store';
import { Product } from '../product/product';


export enum ProductActionType {
    ToggleProductCode = '[product] Toggle Product Code',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionType.ToggleProductCode;

    constructor(public payload: boolean) {

    }
}

export class Load implements Action {
    readonly type = ProductActionType.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionType.LoadSuccess;

    constructor(public payload: Product[]) {

    }
}

export class LoadFail implements Action {
    readonly type = ProductActionType.LoadFail;

    constructor(public payload: string) {

    }
}

export type ProductActions = ToggleProductCode | Load | LoadSuccess | LoadFail;
