import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { EpisodesService } from '../../services/episodes.service'
import { Episodes } from '../../interfaces/episodes'

@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule],
  providers: [EpisodesService],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css',
})
export class EpisodesComponent {
  @Input() searchTerm: string = ''
  episodes: Episodes[] = []

  constructor(private episodeService: EpisodesService) {}

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((episodes) => {
      this.episodes = episodes
    })
  }

  ngOnChanges(): void {
    if (this.searchTerm) {
      this.episodes = this.episodes.filter((episode) =>
        episode.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    } else {
      this.episodeService.getEpisodes().subscribe((episodes) => {
        this.episodes = episodes
      })
    }
  }
}
