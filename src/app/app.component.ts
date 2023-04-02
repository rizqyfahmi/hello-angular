import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './types/product.type';
import { ProductService } from './services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Http Request';
  products: Product[] = [];
  editMode: boolean = false;
  currentProductId: number = -1;
  errorMessage: string = '';
  @ViewChild('productsForm') form?: NgForm;

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductCreate(product: { name: string, description: string, price: number }) {
    if (!this.editMode) {
      this.productService.createProduct(product).subscribe((response) => {
        console.log('create: ', response);
        this.fetchProducts();
        this.editMode = false;
        this.form?.reset();
      });
      return;
    }

    this.productService.updateProduct(this.currentProductId, {...product, id: this.currentProductId}).subscribe((response) => {
      console.log('update: ', response);
      this.fetchProducts();
      this.editMode = false;
      this.form?.reset();
    });
  }

  onDeleteProduct(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      console.log('delete: ');
      this.products = this.products.filter((product) => product.id != id);
    });
  }

  onEditProduct(id: number) {
    const product: Product | undefined = this.products.find((product) => product.id == id);
    console.log('edit: ', product);

    if (!product) return console.log('Product is null!');
    
    this.form?.setValue({
      name: product.name,
      description: product.description,
      price: product.price
    });

    this.editMode = true;
    this.currentProductId = id;
  }

  private fetchProducts() {    
    this.productService.fetchProducts().subscribe({
      next: (products) => {
        console.log('products: ', products);
        this.products = products;
      },
      error: (errorMessage) => {
        this.errorMessage = errorMessage;
      }
    });
  }
}
