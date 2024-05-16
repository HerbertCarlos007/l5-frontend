import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  ngOnChanges(): void {
    if (this.searchTerm) {
      this.characters = this.characters.filter((character) =>
        character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.characterService.getCharacters().subscribe((characters) => {
        this.characters = characters;
      });
    }
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
