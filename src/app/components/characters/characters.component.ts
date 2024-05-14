import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule ],
  providers: [CharacterService],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  
  characters: Character[] = [];
  
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
      console.log(this.characters)
    });
  }
}
