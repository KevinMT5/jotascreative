import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';
import { LucideAngularModule, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss'
})
export class Contacto {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Clock = Clock;
  readonly Send = Send;
  readonly CheckCircle = CheckCircle;

  nombre = '';
  telefono = '';
  correo = '';
  enviando = false;
  enviado = false;
  error = false;

  constructor(private cdr: ChangeDetectorRef) {}

  async enviar() {
    if (!this.nombre || !this.telefono || !this.correo) return;

    this.enviando = true;
    this.error = false;
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

      this.enviado = true;
      this.enviando = false;
      this.nombre = '';
      this.telefono = '';
      this.correo = '';
      this.cdr.detectChanges();

    } catch (err) {
      console.error('Error EmailJS:', err);
      this.error = true;
      this.enviando = false;
      this.cdr.detectChanges();
    }
  }
}