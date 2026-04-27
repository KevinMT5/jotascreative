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


  galeria: Record<string, { src: string; titulo: string }[]> = {
    logos: [
      { src: 'images/portafolio/logos/logo1.png', titulo: 'Logo 1' },
      { src: 'images/portafolio/logos/logo2.png', titulo: 'Logo 2' },
      { src: 'images/portafolio/logos/logo3.png', titulo: 'Logo 3' },
      { src: 'images/portafolio/logos/logo4.png', titulo: 'Logo 4' },
    ],
    disenos: [
      { src: 'images/portafolio/disenos/diseno1.png', titulo: 'Diseño 1' },
      { src: 'images/portafolio/disenos/diseno2.png', titulo: 'Diseño 2' },
      { src: 'images/portafolio/disenos/diseno3.png', titulo: 'Diseño 3' },
      { src: 'images/portafolio/disenos/diseno4.png', titulo: 'Diseño 4' },
    ],
    banners: [
      { src: 'images/portafolio/banners/banner1.png', titulo: 'Banner 1' },
      { src: 'images/portafolio/banners/banner2.png', titulo: 'Banner 2' },
      { src: 'images/portafolio/banners/banner3.png', titulo: 'Banner 3' },
      { src: 'images/portafolio/banners/banner4.png', titulo: 'Banner 4' },
    ],
    fotografia: [
      { src: 'images/portafolio/fotografia/foto1.png', titulo: 'Fotografía 1' },
      { src: 'images/portafolio/fotografia/foto2.png', titulo: 'Fotografía 2' },
      { src: 'images/portafolio/fotografia/foto3.png', titulo: 'Fotografía 3' },
      { src: 'images/portafolio/fotografia/foto4.png', titulo: 'Fotografía 4' },
    ],
  };

  get itemsActivos() {
    return this.galeria[this.tabActivo];
  }

  cambiarTab(id: string) {
    this.tabActivo = id;
  }
}