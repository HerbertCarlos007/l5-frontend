import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private authService: AuthService) {}
  
  username: string | null = '' 
  
  ngOnInit() {
    const data = this.authService.getUsername()
    this.username = data
  }
}
