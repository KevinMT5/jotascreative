import { Component } from '@angular/core';
import { Contacto } from '../components/contacto';

@Component({
  selector: 'app-home',
  imports: [Contacto],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}