import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarButtonsComponent } from './navbar-buttons/navbar-buttons';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarButtonsComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  // Use Link model so links are data-driven and the model is active
  navLinks: Link[] = [
    new Link('Home', '#'),
    new Link('Movies', '#'),
    new Link('TV Shows', '#'),
    new Link('My List', '#')
  ];
}