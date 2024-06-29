import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  types: string[];
  industries: string[];
  reference: string;
  publishDate: string;
  location: string;
  description: string;
  responsibilities: string[];
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = '/jobs';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJobById(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }
}
