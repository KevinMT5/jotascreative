import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';
import { LucideAngularModule, MessageCircle, X, Send, ChevronRight } from 'lucide-angular';
import { ReplacePipe } from '../../pipes/replace.pipe';

interface Mensaje {
  tipo: 'bot' | 'user';
  texto: string;
  opciones?: { label: string; valor: string }[];
}

type Paso = 'inicio' | 'menu' | 'faq' | 'lead_nombre' | 'lead_telefono' | 'lead_correo' | 'fin';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule, LucideAngularModule, ReplacePipe],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  readonly MessageCircle = MessageCircle;
  readonly X = X;
  readonly Send = Send;
  readonly ChevronRight = ChevronRight;

  abierto = false;
  mensajes: Mensaje[] = [];
  inputTexto = '';
  paso: Paso = 'inicio';
  leadNombre = '';
  leadTelefono = '';
  enviando = false;

  faqs: Record<string, string> = {
    'servicios': 'Ofrecemos: Manejo de Redes Sociales, Community Manager, Fotografía Profesional, Producción de Video, Páginas Web, Publicidad ATL y BTL, Campañas de Marketing y más.',
    'precios': 'Nuestros precios varían según el servicio y el alcance del proyecto. Te recomendamos contactarnos para una cotización personalizada y sin compromiso.',
    'ubicacion': 'Estamos ubicados en Km. 11 Troncal del Norte, Av. La Reina #22, El Salvador. También atendemos de forma remota.',
    'tiempo': 'Los tiempos varían según el proyecto. Una página web toma entre 2-4 semanas, una sesión fotográfica 1-2 días, y el manejo de redes es mensual.',
    'contacto': 'Puedes contactarnos por WhatsApp al **7222-0124** o por correo a **creativejotas@gmail.com**. ¡Respondemos en menos de 24 horas!',
  };

  constructor(private cdr: ChangeDetectorRef) { }

  toggleChat() {
    this.abierto = !this.abierto;
    if (this.abierto && this.mensajes.length === 0) this.iniciarChat();
  }

  iniciarChat() {
    setTimeout(() => {
      this.agregarMensajeBot(
        '¡Hola! 👋 Soy el asistente de **Jotas Creative**. ¿En qué te puedo ayudar hoy?',
        [
          { label: 'Ver servicios', valor: 'servicios' },
          { label: 'Precios', valor: 'precios' },
          { label: 'Ubicación', valor: 'ubicacion' },
          { label: 'Tiempos de entrega', valor: 'tiempo' },
          { label: 'Información de contacto', valor: 'contacto' },
          { label: 'Quiero que me contacten', valor: 'lead' },
        ]
      );
      this.paso = 'menu';
    }, 400);
  }

  seleccionarOpcion(valor: string) {
    const labels: Record<string, string> = {
      lead: 'Quiero que me contacten',
      servicios: 'Ver servicios', precios: 'Precios',
      ubicacion: 'Ubicación', tiempo: 'Tiempos de entrega',
      contacto: 'Información de contacto', menu: 'Volver al menú'
    };
    this.agregarMensajeUsuario(labels[valor] || valor);

    if (valor === 'lead') {
      setTimeout(() => {
        this.agregarMensajeBot('¡Perfecto! 😊 ¿Cuál es tu **nombre completo**?');
        this.paso = 'lead_nombre';
      }, 400);
      return;
    }

    if (valor === 'menu') {
      setTimeout(() => {
        this.agregarMensajeBot('¿En qué más te puedo ayudar?', [
          { label: 'Ver servicios', valor: 'servicios' },
          { label: 'Precios', valor: 'precios' },
          { label: 'Ubicación', valor: 'ubicacion' },
          { label: 'Tiempos de entrega', valor: 'tiempo' },
          { label: 'Información de contacto', valor: 'contacto' },
          { label: 'Quiero que me contacten', valor: 'lead' },
        ]);
        this.paso = 'menu';
      }, 400);
      return;
    }

    if (this.faqs[valor]) {
      setTimeout(() => {
        this.agregarMensajeBot(this.faqs[valor], [
          { label: 'Quiero que me contacten', valor: 'lead' },
          { label: 'Volver al menú', valor: 'menu' },
        ]);
      }, 400);
    }
  }

  enviarTexto() {
    const texto = this.inputTexto.trim();
    if (!texto) return;
    this.inputTexto = '';
    this.agregarMensajeUsuario(texto);

    setTimeout(async () => {
      if (this.paso === 'lead_nombre') {
        this.leadNombre = texto;
        this.agregarMensajeBot(`Mucho gusto, **${texto}** 😊 ¿Cuál es tu número de **WhatsApp**?`);
        this.paso = 'lead_telefono';

      } else if (this.paso === 'lead_telefono') {
        this.leadTelefono = texto;
        this.agregarMensajeBot('¡Casi listo! ¿Cuál es tu **correo electrónico**?');
        this.paso = 'lead_correo';

      } else if (this.paso === 'lead_correo') {
        this.enviando = true;
        this.agregarMensajeBot('Guardando tus datos...');
        try {
          await emailjs.send('service_4z9fc92', 'template_4okdo78', {
            nombre: this.leadNombre,
            telefono: this.leadTelefono,
            correo: texto
          }, 'qoGS3UpNOc5y5m5nX');
          this.mensajes.pop();
          this.agregarMensajeBot(
            `✅ ¡Listo **${this.leadNombre}**! Te contactaremos pronto al **${this.leadTelefono}**. ¡Gracias por confiar en Jotas Creative! 🎉`,
            [{ label: 'Volver al menú', valor: 'menu' }]
          );
          this.paso = 'fin';
        } catch {
          this.mensajes.pop();
          this.agregarMensajeBot('❌ Hubo un error. Contáctanos al 7222-0124.',
            [{ label: 'Volver al menú', valor: 'menu' }]);
        }
        this.enviando = false;
        this.leadNombre = '';
        this.leadTelefono = '';
      } else {
        this.agregarMensajeBot('¿En qué te puedo ayudar?', [
          { label: 'Ver servicios', valor: 'servicios' },
          { label: 'Quiero que me contacten', valor: 'lead' },
        ]);
      }
      this.cdr.detectChanges();
    }, 500);
  }

  private agregarMensajeBot(texto: string, opciones?: { label: string; valor: string }[]) {
    this.mensajes.push({ tipo: 'bot', texto, opciones });
    this.cdr.detectChanges();
    setTimeout(() => {
      const chat = document.querySelector('.chat-mensajes');
      if (chat) chat.scrollTop = chat.scrollHeight;
    }, 100);
  }

  private agregarMensajeUsuario(texto: string) {
    this.mensajes.push({ tipo: 'user', texto });
    this.cdr.detectChanges();
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') this.enviarTexto();
  }
}