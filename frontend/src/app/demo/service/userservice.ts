import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';

// Define an interface for the API response
interface LoginResponse {
  token: string;
  // You can include other properties if present in the response
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4500'; // Your API URL
  private tokenKey = 'auth_token'; // Replace with your token storage key

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    const registerUrl = `${this.apiUrl}/api/v1/register`;
    return this.http.post<User>(registerUrl, user);
  }

  login(email: string, pwd: string): Observable<any> {
    const loginUrl = `${this.apiUrl}/api/v1/login`;
    const body = { email, pwd };
    return this.http.post<LoginResponse>(loginUrl, body).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token); // Store the token on successful login
        }
      })
    );
  }

  // Store token in local storage
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);

  }

  // Get token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Clear token from local storage
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // HttpInterceptor to add the token to outgoing requests
  getTokenInterceptor(): HttpHeaders {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }
    return new HttpHeaders();
  }
  
  // Decode the token's payload to get user information
  decodeToken(): any {
    const token = this.getToken();
    if (token) {
      const tokenParts = token.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log('Decoded Token:', payload); // Log the decoded payload
        return payload;
      }
    }
    return null;
  }
  
}
