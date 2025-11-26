import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '../../../models/button.model';

@Component({
  selector: 'app-navbar-buttons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-buttons.html',
  styleUrls: ['./navbar-buttons.scss']
})
export class NavbarButtonsComponent {
  // Use Button model to drive the rendered buttons
  buttons: Button[] = [
    new Button('Login', 'btn-outline-warning', true),
    new Button('Register', 'btn-warning', true)
  ];
}