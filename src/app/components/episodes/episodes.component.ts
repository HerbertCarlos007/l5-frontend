import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { Episodes } from '../../interfaces/episodes';

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule],
  providers: [EpisodesService],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
  
  episodes: Episodes[] = [];
  
  constructor(private episodeService: EpisodesService) { }
  
  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe(episodes => {
      this.episodes = episodes;
      console.log(this.episodes)
    });
  }
}
