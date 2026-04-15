import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros implements OnInit, OnDestroy {

  imagenes = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png',
  ];

  indiceActivo = 0;
  private intervalo: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalo = setInterval(() => {
        this.siguiente();
      }, 3000);
    }
  }

  ngOnDestroy() {
    if (this.intervalo) clearInterval(this.intervalo);
  }

  siguiente() {
    this.indiceActivo = (this.indiceActivo + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActivo = (this.indiceActivo - 1 + this.imagenes.length) % this.imagenes.length;
  }

  irA(index: number) {
    this.indiceActivo = index;
  }
}