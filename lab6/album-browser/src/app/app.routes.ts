import { Albums } from './components/albums/albums';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }
];