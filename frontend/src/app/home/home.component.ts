import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../auth/auth-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobileMenuOpen = false;
  
  private readonly authStateService = inject(AuthStateService);
  private readonly router = inject(Router);

  readonly currentUser = this.authStateService.currentUser;
  
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';

  ngOnInit(): void {
    // Kiểm tra xem user đã login hay chưa
    this.authStateService.checkAuthStatus();
    if (!this.authStateService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  logout(): void {
    this.authStateService.logout();
    this.router.navigate(['/login']);
  }

  submitContact(): void {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitMessage = 'Vui lòng điền đầy đủ thông tin';
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate API call
    setTimeout(() => {
      this.submitMessage = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời trong 24h';
      this.contactForm = { name: '', email: '', phone: '', message: '' };
      this.isSubmitting = false;
    }, 1500);
  }
}
