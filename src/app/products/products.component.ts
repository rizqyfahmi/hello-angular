import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products = [
    { id: 1, name: "Minimalists Analog watch", price: "109", color: "Black", available: "Available", image: "https://via.placeholder.com/50.png/F16767/fff" },
    { id: 2, name: "Hisense Ultra HD Smart TV", price: "3339", color: "Black", available: "Available", image: "https://via.placeholder.com/50.png/FFB84C/fff" },
    { id: 3, name: "APPLE iPhone 12", price: "1855", color: "Black", available: "Not Available", image: "https://via.placeholder.com/50.png/3A98B9/fff" },
    { id: 4, name: "LG Fully Automatic Washing Machine", price: "1765", color: "White", available: "Available", image: "https://via.placeholder.com/50.png/AD7BE9/fff" },
    { id: 5, name: "LG Refrigerator with Door Cooling", price: "2815", color: "White", available: "Not Available", image: "https://via.placeholder.com/50.png/537FE7/fff" },
  ];

}
