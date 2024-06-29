import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Job } from '../job.service';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule to imports
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements OnInit {
  favoriteJobs: Job[] = [];

  ngOnInit(): void {
    const favorites = localStorage.getItem('favoriteJobs');
    this.favoriteJobs = favorites ? JSON.parse(favorites) : [];
  }
}
