import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Share2, Users, Video, Camera, Megaphone, Globe, BarChart2, TrendingUp, Gift, CreditCard, Search, Tv } from 'lucide-angular';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios {
  readonly Share2 = Share2;
  readonly Users = Users;
  readonly Video = Video;
  readonly Camera = Camera;
  readonly Megaphone = Megaphone;
  readonly Globe = Globe;
  readonly BarChart2 = BarChart2;
  readonly TrendingUp = TrendingUp;
  readonly Gift = Gift;
  readonly CreditCard = CreditCard;
  readonly Search = Search;
  readonly Tv = Tv;

  servicios = [
    { icon: Share2, titulo: 'Manejo de Redes Sociales', desc: 'Planificación, creación y gestión integral alineadas a los objetivos de tu marca.' },
    { icon: Users, titulo: 'Community Manager', desc: 'Gestión profesional de comunidades digitales, reputación de marca y atención al cliente.' },
    { icon: Video, titulo: 'Producción Videográfica', desc: 'Video corporativo, institucional y promocional con narrativa, estética y calidad audiovisual.' },
    { icon: Camera, titulo: 'Fotografía Profesional', desc: 'Fotografía de producto, eventos corporativos, sociales y sesiones de graduación.' },
    { icon: Megaphone, titulo: 'Publicidad ATL y BTL', desc: 'Estrategias publicitarias tradicionales y no tradicionales para posicionar tu marca.' },
    { icon: Globe, titulo: 'Creación de Páginas Web', desc: 'Sitios web modernos, funcionales y adaptables enfocados en experiencia de usuario.' },
    { icon: Tv, titulo: 'Spots Publicitarios', desc: 'Conceptualización, guion, producción y edición de spots para medios digitales.' },
    { icon: Search, titulo: 'Estudios de Mercado', desc: 'Análisis de mercado, competencia y tendencias para decisiones estratégicas.' },
    { icon: TrendingUp, titulo: 'Campañas de Marketing', desc: 'Campañas integrales que combinan creatividad, medios y análisis para lograr resultados.' },
    { icon: Gift, titulo: 'Productos Promocionales', desc: 'Diseño y producción de productos personalizados que refuerzan tu identidad de marca.' },
    { icon: CreditCard, titulo: 'Carnetización', desc: 'Diseño y producción de carnets institucionales y empresariales con identidad visual.' },
    { icon: BarChart2, titulo: 'Benchmarking', desc: 'Análisis comparativo de competencia para fortalecer el posicionamiento de tu marca.' },
  ];
}