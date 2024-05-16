import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CharactersComponent } from '../characters/characters.component';
import { EpisodesComponent } from '../episodes/episodes.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CharactersComponent, EpisodesComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  searchTerm: string = '';
  status: string = ''
  showCharacters = true;
  onItemClicked(item: string) {
    this.showCharacters = item === 'characters';
  }
  
  
}
