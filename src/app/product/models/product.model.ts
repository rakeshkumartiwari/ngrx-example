import { Product } from '../product/product';

export interface Fruit {
    id: number;
    fruitName: string;
    fruitCode: number;
}

export interface ProductDetails {
    fruitDetails: Fruit;
    isCancel: boolean;
}

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    error: string;
}
