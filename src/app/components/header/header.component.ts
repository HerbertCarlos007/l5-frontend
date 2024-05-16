import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
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
  @Output() searchTermChange = new EventEmitter<string>()

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    this.searchTerm = target.value;
    console.log(this.searchTerm)
    this.searchTermChange.emit(this.searchTerm)
  }
}
