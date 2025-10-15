import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { MovieListComponent } from './movie-list/movie-list';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeroComponent, MovieListComponent],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class ContentComponent {

}