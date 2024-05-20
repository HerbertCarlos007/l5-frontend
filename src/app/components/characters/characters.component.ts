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
  currentPage: number = 1;
  totalPages: number = 42;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  ngOnChanges(): void {
    this.filterCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.characterService.getCharacters(page).subscribe((characters) => {
      this.characters = characters;
    });
  }

  filterCharacters(): void {
    this.characterService.getCharacters(this.currentPage).subscribe((characters) => {
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

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters(this.currentPage);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters(this.currentPage);
    }
  }
}
