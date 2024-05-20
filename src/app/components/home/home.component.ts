import { Component } from '@angular/core'
import { HeaderComponent } from '../header/header.component'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { CharactersComponent } from '../characters/characters.component'
import { EpisodesComponent } from '../episodes/episodes.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CharacterDetailComponent } from '../character-detail/character-detail.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, CharactersComponent, CharacterDetailComponent,EpisodesComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  searchTerm: string = ''
  status: string = ''
  showCharacters = true
  species: string = ''
  onItemClicked(item: string) {
    this.showCharacters = item === 'characters'
  }
}
