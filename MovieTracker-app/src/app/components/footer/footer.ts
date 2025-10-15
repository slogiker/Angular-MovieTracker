import { Component } from '@angular/core';
import { FooterLinksComponent } from './footer-links/footer-links';
import { SocialIconsComponent } from './social-icons/social-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterLinksComponent, SocialIconsComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {

}