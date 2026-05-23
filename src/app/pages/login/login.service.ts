import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // TODO: Palitan ng actual API URL mo
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      username: credentials.username,
      password: credentials.password
    }).pipe(
      map(response => {
        // Save token sa localStorage
        if (credentials.rememberMe) {
          localStorage.setItem('auth_token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        } else {
          sessionStorage.setItem('auth_token', response.token);
          sessionStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
      }),
      catchError(error => {
        const message = error.error?.message || 'Login failed. Please try again.';
        return throwError(() => new Error(message));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!(localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token'));
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  }

  getUser(): any {
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}