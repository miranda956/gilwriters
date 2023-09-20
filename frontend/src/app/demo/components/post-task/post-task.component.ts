import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Job } from '../../models/job'; // Assuming you have defined Job model
import { JobService } from '../../service/jobservice'; // Import your JobService
import { AuthService } from '../../service/userservice';

@Component({
  selector: 'app-post-task',
  templateUrl: './post-task.component.html',
  styleUrls: ['./post-task.component.scss']
})

export class PostTaskComponent implements OnInit {
  registrationData: Job = {
    description: '',
    expected_delivery_time:0,
    budget: 0,
    requirement_document: null,
    status: 'Pending',
    category: ''
  };

  taskPosted: boolean = false;
  successMessage: string = '';

  constructor(
    private router: Router,
    private jobService: JobService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmitJob(): void {
    const userPayload = this.authService.decodeToken();


    if (userPayload && userPayload.user.id) {
      console.log('Decoded Payload:', userPayload); // Log the decoded payload

      const jobData: any = { // Use 'any' type for jobData
        description: this.registrationData.description,
        expected_delivery_time: this.registrationData.expected_delivery_time,
        budget: this.registrationData.budget,
        requirement_document: this.registrationData.requirement_document,
        status: this.registrationData.status,
        category: this.registrationData.category,
        UserId: userPayload.user.id
      };
      console.log(jobData)

      this.jobService.createJob(jobData).subscribe(
        (response) => {
          console.log('Task posted successfully:', response);
          this.taskPosted = true;
          this.successMessage = 'Task created successfully proceeding to payment';

          setTimeout(() => {
            this.successMessage = '';
          }, 10000);
        },
        (error) => {
          console.error('Task posting failed:', error);
        }
      );
    } else {
      console.error('User ID not found in token.');
    }
  }

  goToPaymentsPage(): void {
    this.router.navigate(['/payments']);
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      const filePath = 'uploads/' + selectedFile.name;
      this.registrationData.requirement_document = filePath;
    } else {
      this.registrationData.requirement_document = null;
    }
  }
}
