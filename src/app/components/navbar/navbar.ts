import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  scrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 40; }

  toggleMenu() { this.menuOpen = !this.menuOpen; }

  scrollTo(id: string) {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}