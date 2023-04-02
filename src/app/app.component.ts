import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Http Request';

  constructor(private http: HttpClient) {}

  onProductCreate(product: { name: string, description: string, price: string }) {
    console.log('product: ', product);
    const headers = new HttpHeaders({
      'Content-Type': ' application/json'
    });
    this.http.post('http://localhost:4000/products', product, { headers: headers }).subscribe((response) => {
      console.log('response: ', response);
      
    });
  }
}
