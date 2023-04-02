import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './types/product.type';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Http Request';
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductCreate(product: { name: string, description: string, price: number }) {
    this.productService.createProduct(product).subscribe((response) => {
      console.log('response: ', response);
      this.fetchProducts();
    });
  }

  onDeleteProduct(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id != id);
    });
  }

  private fetchProducts() {    
    this.productService.fetchProducts().subscribe((products) => {
      console.log('products: ', products);
      this.products = products;
    });
  }
}
