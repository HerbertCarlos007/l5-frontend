import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string | null = localStorage.getItem('user');
  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'herbert' && password === '12345') {
      this.username = username;
      localStorage.setItem('user', username);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.username = null;
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getUsername(): string | null {
    return this.username;
  }

  isAuthenticated(): boolean {
    return this.username !== null;
  }
}
