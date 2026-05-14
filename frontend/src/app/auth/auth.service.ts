import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthRequest, AuthResponse } from './auth.models';

// Tài khoản mặc định khi backend chưa chạy
const MOCK_USERS: { username: string; password: string }[] = [
  { username: 'admin', password: '123456' },
  { username: 'user', password: '123456' },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8081/api/auth';

  register(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, request).pipe(
      catchError(() => {
        // Fallback: thêm vào mock list
        const exists = MOCK_USERS.find(u => u.username === request.username);
        if (exists) {
          return throwError(() => ({ error: { message: 'Tài khoản đã tồn tại' } }));
        }
        MOCK_USERS.push({ username: request.username, password: request.password });
        return of({ success: true, message: 'Đăng ký thành công!', username: request.username });
      })
    );
  }

  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, request).pipe(
      catchError(() => {
        // Fallback: kiểm tra mock users khi backend không available
        const user = MOCK_USERS.find(
          u => u.username === request.username && u.password === request.password
        );
        if (user) {
          return of({ success: true, message: 'hello world', username: user.username });
        }
        return throwError(() => ({
          error: { message: 'Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.' }
        }));
      })
    );
  }
}
