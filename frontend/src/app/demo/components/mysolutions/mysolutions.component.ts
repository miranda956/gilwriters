import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mysolutions',
  templateUrl: './mysolutions.component.html',
  styleUrls: ['./mysolutions.component.scss']
})
export class MysolutionsComponent implements OnInit {
  solutionList: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loading = true;
    this.http.get<any>('https://api.example.com/mysolutions') // Replace with your API endpoint
      .subscribe(
        response => {
          this.solutionList = response.solutions.map((solution: any) => ({
            taskId: solution.taskId,
            solutionDescription: solution.solutionDescription,
            documents: solution.documents
          }));
          this.loading = false;
        },
        error => {
          console.error('Error fetching solution data:', error);
          this.loading = false;
        }
      );
  }
}
