import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  readonly isAuthenticated = signal(false);
  readonly currentUser = signal<{ username: string } | null>(null);

  setAuthenticated(authenticated: boolean, username?: string): void {
    this.isAuthenticated.set(authenticated);
    if (authenticated && username) {
      this.currentUser.set({ username });
      // Lưu vào localStorage
      localStorage.setItem('auth_token', JSON.stringify({ username, authenticated: true }));
    } else {
      this.currentUser.set(null);
      localStorage.removeItem('auth_token');
    }
  }

  checkAuthStatus(): void {
    const stored = localStorage.getItem('auth_token');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.authenticated && data.username) {
          this.isAuthenticated.set(true);
          this.currentUser.set({ username: data.username });
        }
      } catch (e) {
        this.logout();
      }
    }
  }

  logout(): void {
    this.setAuthenticated(false);
  }
}
