import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Http Request';
  products: Product[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductCreate(product: { name: string, description: string, price: number }) {
    console.log('product: ', product);
    const headers = new HttpHeaders({
      'Content-Type': ' application/json'
    });
    this.http.post('http://localhost:4000/products', product, { headers: headers }).subscribe((response) => {
      console.log('response: ', response);
    });
  }

  private fetchProducts() {
    this.http.get('http://localhost:4000/products')
    .pipe(map((response) => {
      console.log('response: ', response);
      return <Product[]>response; // Cast response object into array of product
    }))
    .subscribe((products) => {
      console.log('products: ', products);
      this.products = products;
    });
  }
}
