import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from '../../services/character.service'
import { Character } from '../../interfaces/character'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  character: Character | null = null
  
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.characterService.getCharacterById(id).subscribe((character) => {
        this.character = character
      })
    }
  }
}
