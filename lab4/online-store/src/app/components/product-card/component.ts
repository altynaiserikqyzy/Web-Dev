import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html', 
  styleUrls: ['./component.css']     
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  
  currentImageIndex: number = 0;

  ngOnInit() {
    this.currentImageIndex = 0;
  }

  round(rating: number) {
    return Math.round(rating);
  }

  getCurrentImageIndex(): number {
    return this.currentImageIndex;
  }

  setMainImage(image: string, event: Event) {
    event.preventDefault();
    const index = this.product.images.indexOf(image);
    if (index !== -1) {
      this.currentImageIndex = index;
      this.product.image = image;
    }
  }

  prevImage(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const newIndex = this.currentImageIndex > 0 
      ? this.currentImageIndex - 1 
      : this.product.images.length - 1;
    this.currentImageIndex = newIndex;
    this.product.image = this.product.images[newIndex];
  }

  nextImage(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const newIndex = this.currentImageIndex < this.product.images.length - 1 
      ? this.currentImageIndex + 1 
      : 0;
    this.currentImageIndex = newIndex;
    this.product.image = this.product.images[newIndex];
  }

  shareOnWhatsApp() {
    const text = `Посмотри этот товар: ${this.product.name} - ${this.product.link}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри этот товар: ${this.product.name}`);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(telegramUrl, '_blank');
  }
}