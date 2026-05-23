import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: '',
    rememberMe: false
  };

  showPassword = false;
  isLoading = false;
  loginError = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const el = document.querySelector('.login-page') as HTMLElement;
    if (el) {
      el.style.backgroundImage = `url('assets/images/logback.jpg')`;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    this.loginError = '';

    if (!this.credentials.username || !this.credentials.password) {
      return;
    }

    this.isLoading = true;

    // -----------------------------------------------
    // TODO: Palitan ng actual API call via LoginService
    // Temporary: direct redirect after 1.2s (para makita ang loading state)
    // -----------------------------------------------
    setTimeout(() => {
      this.isLoading = false;

      // Mock: any username + password = success para muna
      // Kapag may real backend na, gamitin ang LoginService
      this.router.navigate(['/dashboard']);

      // Example ng error handling (uncomment if may backend na):
      // this.loginError = 'Invalid username or password.';
    }, 1200);
  }
}