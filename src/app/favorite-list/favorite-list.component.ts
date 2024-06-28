import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../job.service';

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule],
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
