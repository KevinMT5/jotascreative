import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portafolio',
  imports: [CommonModule],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.scss'
})
export class Portafolio {

  tabActivo = 'logos';

  tabs = [
    { id: 'logos', label: 'Logos', icon: '✏️' },
    { id: 'disenos', label: 'Diseños', icon: '🎨' },
    { id: 'banners', label: 'Banners y Papelería', icon: '📄' },
    { id: 'fotografia', label: 'Fotografía', icon: '📸' },
  ];

  // ⚠️ Reemplaza los src con tus imágenes reales en public/images/portafolio/
  galeria: Record<string, { src: string; titulo: string }[]> = {
    logos: [
      { src: 'images/portafolio/logos/logo1.jpg', titulo: 'Logo 1' },
      { src: 'images/portafolio/logos/logo2.jpg', titulo: 'Logo 2' },
      { src: 'images/portafolio/logos/logo3.jpg', titulo: 'Logo 3' },
      { src: 'images/portafolio/logos/logo4.jpg', titulo: 'Logo 4' },
    ],
    disenos: [
      { src: 'images/portafolio/disenos/diseno1.jpg', titulo: 'Diseño 1' },
      { src: 'images/portafolio/disenos/diseno2.jpg', titulo: 'Diseño 2' },
      { src: 'images/portafolio/disenos/diseno3.jpg', titulo: 'Diseño 3' },
      { src: 'images/portafolio/disenos/diseno4.jpg', titulo: 'Diseño 4' },
    ],
    banners: [
      { src: 'images/portafolio/banners/banner1.jpg', titulo: 'Banner 1' },
      { src: 'images/portafolio/banners/banner2.jpg', titulo: 'Banner 2' },
      { src: 'images/portafolio/banners/banner3.jpg', titulo: 'Banner 3' },
      { src: 'images/portafolio/banners/banner4.jpg', titulo: 'Banner 4' },
    ],
    fotografia: [
      { src: 'images/portafolio/fotografia/foto1.jpg', titulo: 'Fotografía 1' },
      { src: 'images/portafolio/fotografia/foto2.jpg', titulo: 'Fotografía 2' },
      { src: 'images/portafolio/fotografia/foto3.jpg', titulo: 'Fotografía 3' },
      { src: 'images/portafolio/fotografia/foto4.jpg', titulo: 'Fotografía 4' },
    ],
  };

  get itemsActivos() {
    return this.galeria[this.tabActivo];
  }

  cambiarTab(id: string) {
    this.tabActivo = id;
  }
}