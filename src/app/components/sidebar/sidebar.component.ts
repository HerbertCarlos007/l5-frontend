import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router: Router) {}
  
  showCharacters = true

  @Output() itemClicked = new EventEmitter<string>()

  onItemClick(item: string) {
    this.itemClicked.emit(item)
  }
  
  logout() {
    this.authService.logout()
  }
  
  goToProfile() {
    this.router.navigate(['profile'])
  }
}
