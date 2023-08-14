import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/userservice'; // Adjust the import path based on your project structure
import { HttpClient } from '@angular/common/http';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
    }

    :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }

    /* Add styling for the success message card */
    .success-card {
      background-color: lightgreen;
      border: 1px solid green;
      color: darkgreen;
      padding: 10px;
      margin-top: 10px;
      border-radius: 5px;
    }
  `]
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  email!: string; // Change from username to email
  password!: string;
  loginSuccess: boolean = false; // Add loginSuccess flag

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private authService: AuthService, // Inject the AuthService
    private http: HttpClient
  ) { }

  login() {
    // Call the login method from the AuthService using email and password.
    // Assuming your AuthService has a login method that handles the API call and token storage.

    this.authService.login(this.email, this.password)
      .subscribe(
        (response) => {
          // Authentication successful
          this.loginSuccess = true; // Set the flag to display success message
          setTimeout(() => {
            this.loginSuccess = false; // Clear the success message after a delay
            // Replace '/progress' with the actual route for the user dashboard or task management page.
            this.router.navigate(['/progress']);
          }, 3000); // Adjust the delay (in milliseconds) as needed
        },
        (error) => {
          // Authentication failed
          alert('Invalid credentials. Please try again.');
        }
      );
  }
}
