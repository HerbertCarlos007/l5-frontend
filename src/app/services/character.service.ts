import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl).pipe(
      map((response: any) => response.results)
    );
  }
}
