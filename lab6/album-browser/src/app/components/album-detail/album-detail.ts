import { Album } from './../../models/album.model';
import { AlbumService } from './../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  editedTitle = '';
  loading = true; 
  error = false; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.loadAlbum();
  }

  loadAlbum() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (isNaN(id)) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
        console.log('Album loaded:', data);
      },
      error: (err) => {
        console.error('Error loading album:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  saveTitle() {
    if (!this.editedTitle.trim()) {
      return; 
    }

    const updatedAlbum = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: () => {
        this.album.title = this.editedTitle;
        console.log('Album updated successfully');
      },
      error: (err) => {
        console.error('Error updating album:', err);
      }
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}