import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { Episodes } from '../interfaces/episodes'

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode'
  
  constructor(private http: HttpClient) { }
  
  getEpisodes(): Observable<Episodes[]> {
    return this.http.get<Episodes[]>(this.apiUrl).pipe(
      map((response: any) => response.results)
    )
  }
}
