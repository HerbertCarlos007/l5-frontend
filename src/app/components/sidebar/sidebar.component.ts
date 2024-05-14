import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showCharacters = true; // Exibir characters por padrão

  @Output() itemClicked = new EventEmitter<string>();

  onItemClick(item: string) {
    this.itemClicked.emit(item);
  }
}
