import { CommonModule } from '@angular/common';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthMode, AuthResponse } from './auth.models';
import { AuthService } from './auth.service';
import { AuthStateService } from './auth-state.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly authStateService = inject(AuthStateService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly successMessage = signal('');
  readonly mode = signal<AuthMode>('login');

  username = '';
  password = '';

  ngOnInit(): void {
    // Kiểm tra nếu đã login, chuyển đến home
    this.authStateService.checkAuthStatus();
    if (this.authStateService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  setMode(mode: AuthMode): void {
    this.mode.set(mode);
    this.error.set('');
    this.successMessage.set('');
  }

  register(): void {
    this.submit('register', (response) => {
      this.successMessage.set(response.message);
      this.mode.set('login');
      this.password = '';
    });
  }

  login(): void {
    this.submit('login', (response) => {
      this.successMessage.set('Đăng nhập thành công!');
      this.error.set('');
      // Lưu trạng thái xác thực
      this.authStateService.setAuthenticated(true, this.username);
      // Chuyển đến trang home sau 500ms
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 500);
    });
  }

  private submit(action: AuthMode, onSuccess: (response: AuthResponse) => void): void {
    this.loading.set(true);
    this.error.set('');
    this.successMessage.set('');

    const request = {
      username: this.username,
      password: this.password,
    };

    const authRequest = action === 'login'
      ? this.authService.login(request)
      : this.authService.register(request);

    authRequest.subscribe({
      next: (response) => {
        onSuccess(response);
        this.loading.set(false);
      },
      error: (response) => {
        this.error.set(
          response.error?.message ?? 'Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.'
        );
        this.loading.set(false);
      },
    });
  }
}
