import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Job, JobService } from '../job.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule to imports
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe((data) => {
      console.log('Jobs fetched:', data);
      this.jobs = data;
      const favorites = localStorage.getItem('favoriteJobs');
      this.favoriteJobs = favorites ? JSON.parse(favorites) : [];
    });
  }

  toggleFavorite(job: Job): void {
    const index = this.favoriteJobs.findIndex((j) => j.id === job.id);
    if (index > -1) {
      this.favoriteJobs.splice(index, 1);
    } else {
      this.favoriteJobs.push(job);
    }
    localStorage.setItem('favoriteJobs', JSON.stringify(this.favoriteJobs));
  }

  isFavorite(job: Job): boolean {
    return this.favoriteJobs.some((j) => j.id === job.id);
  }
}
