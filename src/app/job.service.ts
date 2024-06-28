import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  reference: string;
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
}
