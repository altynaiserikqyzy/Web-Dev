import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';  // Исправить: AppComponent вместо App

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));