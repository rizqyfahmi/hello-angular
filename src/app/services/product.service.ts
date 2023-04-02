import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';
import { Observable, catchError, map, throwError } from 'rxjs';

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
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    const params = new HttpParams().set('print', 'pretty');

    return this.http.get('http://localhost:4000/products', { headers: headers, params: params }).pipe(map((response) => {
      console.log('response: ', response);
      return <Product[]>response; // Cast response object into array of product
    }), catchError((error) => {
      console.log('error: ', error);
      return throwError(() => error.message);
    }))
  }

  updateProduct(id: number, product: Product) {
    return this.http.put('http://localhost:4000/products/' + id, product);
  }

  removeProduct(id: number) {
    return this.http.delete('http://localhost:4000/products/' + id);
  }
}
