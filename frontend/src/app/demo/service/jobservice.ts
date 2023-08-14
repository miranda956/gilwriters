import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private baseUrl: string = 'http://localhost:4500/api/jobs/';

  constructor(private http: HttpClient) {}

  // Create a new project
  createJob(Job: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, Job);
  }

  // Get project by ID
  getJobById(id: number): Observable<Job> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Job>(url);
  }

  // Get all projects
  getAllJob(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }

  // Update a project
  updateJob(id: number, Job: Job): Observable<Job> {
    const url = `${this.baseUrl}${id}`;
    return this.http.put<Job>(url, Job);
  }

  // Delete a project
  deleteJob(id: number): Observable<void> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<void>(url);
  }
}
