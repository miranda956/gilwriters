import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rework',
  templateUrl: './rework.component.html',
  styleUrls: ['./rework.component.scss']
})
export class ReworkComponent implements OnInit {
  tasksList: any[] = []; // Initialize with your actual data from the API
  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching data from an API
    this.loading = true;
    this.fetchTasksDataFromApi().then(data => {
      this.tasksList = data; // Assign your API response data here
      this.loading = false;
    });
  }

  fetchTasksDataFromApi(): Promise<any[]> {
    // Simulate fetching data from an API
    return new Promise(resolve => {
      setTimeout(() => {
        const fakeApiResponse = [
          { taskId: 1, comment: 'Sample comment 1', timeline: '2023-08-10' },
          { taskId: 2, comment: 'Sample comment 2', timeline: '2023-08-15' },
          // ... other data
        ];
        resolve(fakeApiResponse);
      }, 1000); // Simulating delay for API call
    });
  }
}
