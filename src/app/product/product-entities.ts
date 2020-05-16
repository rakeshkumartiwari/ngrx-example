
export interface Fruit {
    id: number;
    fruitName: string;
    fruitCode: number;
}

export interface ProductDetails{
    fruitDetails: Fruit;
    isCancel: boolean;
}