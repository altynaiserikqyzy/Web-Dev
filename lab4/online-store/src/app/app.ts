import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './components/product-list/product-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}

bootstrapApplication(AppComponent);