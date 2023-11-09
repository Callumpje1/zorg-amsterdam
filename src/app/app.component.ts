import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomepageComponent],
  template: '<app-navbar></app-navbar><app-homepage></app-homepage>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zorg-amsterdam';
}
