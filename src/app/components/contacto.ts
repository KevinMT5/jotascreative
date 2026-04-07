import { Component, ChangeDetectorRef } from '@angular/core'; // <-- 1. Importarlo
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  nombre = '';
  telefono = '';
  correo = '';
  enviando = false;
  enviado = false;
  error = false;

  // 2. Inyectarlo en el constructor (ya no necesitamos NgZone)
  constructor(private cdr: ChangeDetectorRef) {}

  async enviar() {
    if (!this.nombre || !this.telefono || !this.correo) return;

    this.enviando = true;
    this.error = false;
    
    // Forzamos actualización por si acaso
    this.cdr.detectChanges(); 

    try {
      await emailjs.send(
        'service_4z9fc92',
        'template_4okdo78',
        {
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo
        },
        'qoGS3UpNOc5y5m5nX'
      );

      // 3. Actualizamos las variables
      this.enviado = true;
      this.enviando = false;
      this.nombre = '';
      this.telefono = '';
      this.correo = '';

      // 4. ¡El toque mágico! Obligamos a Angular a leer las variables de nuevo
      this.cdr.detectChanges();

    } catch (err) {
      console.error('Error EmailJS:', err);
      this.error = true;
      this.enviando = false;
      
      // También lo ponemos aquí por si falla, para que quite el "Enviando..."
      this.cdr.detectChanges(); 
    }
  }
}