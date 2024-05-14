import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private apiUrl = 'https://rickandmortyapi.com/api/episode';
  
  constructor(private http: HttpClient) { }
  
  getEpisodes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((response: any) => response.results)
    );
  }
}
