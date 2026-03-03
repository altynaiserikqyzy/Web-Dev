import { Album } from './../../models/album.model';
import { AlbumService } from './../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        console.log('Albums loaded:', data.length); // Проверка в консоли
      },
      error: (error) => {
        console.error('Error:', error);
        this.loading = false;
        alert('Failed to load albums. Check console for details.');
      }
    });
  }

  deleteAlbum(id: number) {
    if (confirm('Delete this album?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
        },
        error: (error) => {
          console.error('Delete error:', error);
          alert('Failed to delete');
        }
      });
    }
  }
}