import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/userservice';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationData: User = {
    f_name: '',
    l_name: '',
    email: '',
    contact: '',
    pwd: '',
  };

  confirmPassword: string = '';
  registrationSuccess: boolean = false;
  registrationError: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService,    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onRegister(): void {
   

    this.authService.register(this.registrationData)
      .subscribe(
        (response) => {
          this.registrationSuccess = true;
          console.log('Registration successful:', response);

          setTimeout(() => {
            this.registrationSuccess = false;
            this.router.navigate(['/auth/login']);

          }, 5000);
        },
        (error) => {
          console.error('Registration failed:', error);
          if (error.status === 409 && error.error.message === 'Email already registered') {
            this.registrationError = true;
            this.errorMessage = 'Registration failed: Email already registered.';
            setTimeout(() => {
              this.registrationError = false;
              this.errorMessage = '';
            }, 10000);
          }
        }
      );
  }
}
