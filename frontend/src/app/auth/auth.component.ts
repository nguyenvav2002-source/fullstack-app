import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthMode, AuthResponse } from './auth.models';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  private readonly authService = inject(AuthService);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly successMessage = signal('');
  readonly mode = signal<AuthMode>('login');

  username = '';
  password = '';

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
      this.successMessage.set(response.message);
      this.error.set('');
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
          response.error?.message ?? 'tài khoản hoặc mật khẩu đã bị login sai xin vui lòng thử lại'
        );
        this.loading.set(false);
      },
    });
  }
}
