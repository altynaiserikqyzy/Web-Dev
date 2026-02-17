import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-list">
      <div *ngFor="let product of products" class="product-card">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }} KZT</p>
        <p>Rating: {{ product.rating }}/5</p>
        <img [src]="product.image" width="100">
        <a [href]="product.link" target="_blank">View on Kaspi.kz</a>
      </div>
    </div>
  `,
  styles: [`
    .product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; padding: 20px; }
    .product-card { border: 1px solid #ccc; padding: 15px; border-radius: 5px; }
  `]
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Apple smartphone',
      price: 699990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848198174.png',
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
      link: 'https://kaspi.kz/shop/p/iphone-15-pro-max-113677715/'
    }
  ];
}