import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Product } from './product/product';
import { tap } from 'rxjs/operators';
import { ProductDetails } from './models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductService {
    productDetails$ = new BehaviorSubject<ProductDetails>({ isCancel: true, fruitDetails: { id: null, fruitName: '', fruitCode: null } });
    constructor(private http: HttpClient) {

    }

    getData(): Observable<Product[]> {
        return this.http.get<Product[]>('../../assets/mock-data.json').pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }

    setProductDetails(value) {
        this.productDetails$.next(value);
    }

    get geProductDetails() {
        return this.productDetails$.asObservable();
    }

}