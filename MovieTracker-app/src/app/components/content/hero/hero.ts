import { Component } from '@angular/core';
import { Button } from '../../../models/button.model';
import { Link } from '../../../models/link.model';
import { Image } from '../../../models/image.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  button1 = new Button('Learn More', 'blue', true);
  button2 = new Button('Cancel', 'red', false);

  link1 = new Link('Home', 'https://example.com/home');
  link2 = new Link('Contact', 'https://example.com/contact');

  image1 = new Image('assets/hero1.jpg', 'Hero image 1', 600, 400);
  image2 = new Image('assets/hero2.jpg', 'Hero image 2', 800, 500);

}