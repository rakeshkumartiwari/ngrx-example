import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './product/product';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ProductService {
    constructor(private http: HttpClient) {

    }

    getData(): Observable<Product[]> {
        return this.http.get<Product[]>('../../assets/mock-data.json').pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }
}