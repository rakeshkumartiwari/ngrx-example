import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product/product';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ProductService {
    // private products: Product[];
    constructor(private http: HttpClient) {

    }

    getData(): Observable<Product[]> {
        // if (this.products) {
        //     return of(this.products);
        // }
        return this.http.get<Product[]>('../../assets/mock-data.json').pipe(
            tap(data => console.log(JSON.stringify(data))),
            // tap(data => this.products = data)
        );
    }
}