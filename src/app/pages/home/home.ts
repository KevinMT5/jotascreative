import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Servicios } from '../../components/servicios/servicios';
import { Nosotros } from '../../components/nosotros/nosotros';
import { Portafolio } from '../../components/portafolio/portafolio';
import { Contacto } from '../../components/contacto/contacto';
import { Footer } from '../../components/footer/footer';
import { Chatbot } from '../../components/chatbot/chatbot';


@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Servicios, Nosotros, Portafolio, Contacto, Footer, Chatbot],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
          });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));
      }, 100);
    }
  }
}