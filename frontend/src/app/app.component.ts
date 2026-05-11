import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

interface HelloResponse {
  message: string;
  databaseStatus: string;
  requestCount: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly http = inject(HttpClient);

  readonly loading = signal(false);
  readonly error = signal('');
  readonly hello = signal<HelloResponse | null>(null);

  constructor() {
    this.loadHello();
  }

  loadHello(): void {
    this.loading.set(true);
    this.error.set('');

    this.http.get<HelloResponse>('http://localhost:8080/api/hello').subscribe({
      next: (response) => {
        this.hello.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Khong ket noi duoc backend. Hay kiem tra Spring Boot dang chay o cong 8080.');
        this.loading.set(false);
      },
    });
  }
}
