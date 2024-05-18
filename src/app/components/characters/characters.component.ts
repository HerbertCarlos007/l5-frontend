import { Component, Input } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [CharacterService],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  @Input() searchTerm: string = '';
  @Input() status: string = '';
  @Input() species: string = '';
  characters: Character[] = [];

  constructor(private characterService: CharacterService, private router: Router) { }

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
      
      if (this.species) {
        filteredCharacters = filteredCharacters.filter((character) =>
          character.species.toLowerCase().includes(this.species.toLowerCase())
        );
      }
      
      
      this.characters = filteredCharacters;
    });
  }
  
  goToDetail(id: string): void {
    console.log('testeeeee')
    this.router.navigate(['character', id]);
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
