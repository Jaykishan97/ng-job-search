import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Job, JobService } from '../job.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(jobId).subscribe((job: Job) => (this.job = job));
  }

  goBack(): void {
    this.location.back();
  }
}