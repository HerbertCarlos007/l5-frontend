import { Component, Input } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  providers: [CharacterService],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  @Input() searchTerm: string = '';
  @Input() status: string = '';
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  ngOnChanges(): void {
    this.filterCharacters();
  }

  filterCharacters(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      let filteredCharacters = characters;

      if (this.searchTerm) {
        filteredCharacters = filteredCharacters.filter((character) =>
          character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      if (this.status) {
        filteredCharacters = filteredCharacters.filter((character) =>
          character.status.toLowerCase().includes(this.status.toLowerCase())
        );
      }
      this.characters = filteredCharacters;
    });
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'alive';
      case 'dead':
        return 'dead';
      case 'unknown':
        return 'unknown';
      default:
        return '';
    }
  }
}
