import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchTerm: string = ''
  status: string = ''
  species: string = ''
  @Output() searchTermChange = new EventEmitter<string>()
  @Output() statusTermChange = new EventEmitter<string>()
  @Output() specieTermChange = new EventEmitter<string>()

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    this.searchTerm = target.value;
    this.searchTermChange.emit(this.searchTerm)
  }
  
  filterByStatus(e:Event) {
    const target = e.target as HTMLInputElement
    this.status = target.value;
    this.statusTermChange.emit(this.status)
  }
  
  filterBySpecie(e:Event) {
    const target = e.target as HTMLInputElement
    this.species = target.value;
    this.specieTermChange.emit(this.species)
    console.log(this.species)
  }
}
