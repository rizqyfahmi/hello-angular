import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(product: { name: string, description: string, price: number }): Observable<Object> {
    console.log('product: ', product);

    const headers = new HttpHeaders({
      'Content-Type': ' application/json'
    });

    return this.http.post('http://localhost:4000/products', product, { headers: headers });
  }

  fetchProducts() {
    return this.http.get('http://localhost:4000/products').pipe(map((response) => {
      console.log('response: ', response);
      return <Product[]>response; // Cast response object into array of product
    }))
  }

  removeProduct(id: number) {
    return this.http.delete('http://localhost:4000/products/' + id);
  }
}