import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Character } from '../interfaces/character'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  

  private apiUrl = 'https://rickandmortyapi.com/api/character'

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<Character[]> {
    const params = new HttpParams().set('page', page.toString())
    return this.http.get<Character[]>(this.apiUrl, { params }).pipe(
      map((response: any) => response.results)
    )
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`)
  }
}
