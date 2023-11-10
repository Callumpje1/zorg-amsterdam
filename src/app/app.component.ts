import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent, HomepageComponent, FooterComponent],
  template: '<app-navbar></app-navbar> <app-homepage></app-homepage> <app-footer></app-footer>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zorg-amsterdam';
}
