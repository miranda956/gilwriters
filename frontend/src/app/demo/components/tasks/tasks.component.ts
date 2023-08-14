import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasksList: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.loading = true;
    this.http.get<any>('https://api.example.com/tasks') // Replace with your API endpoint
      .subscribe(
        response => {
          this.tasksList = response.tasks.map((task: any) => ({
            taskId: task.taskId,
            description: task.description,
            budget: task.budget,
            timeline: task.timeline,
            attachments: task.attachments
          }));
          this.loading = false;
        },
        error => {
          console.error('Error fetching tasks data:', error);
          this.loading = false;
        }
      );
  }
}
