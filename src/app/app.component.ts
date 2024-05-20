import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { CharacterDetailComponent } from './components/character-detail/character-detail.component'
import { LoginComponent } from './components/login/login.component'
import { ProfileComponent } from './components/profile/profile.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HomeComponent, CharacterDetailComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'L5-frontend'


}
