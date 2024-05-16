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
  @Output() searchTermChange = new EventEmitter<string>()
  @Output() statusTermChange = new EventEmitter<string>()

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
}
