import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isScrolled = signal(false);

  tours = [
    {
      name: 'Valle del Cocora',
      image: 'valle-del-cocora.png',
      description: 'Camina entre las palmas de cera más altas del mundo en un paisaje de ensueño envuelto en niebla.'
    },
    {
      name: 'Salento',
      image: 'salento.png',
      description: 'Explora el pueblo más pintoresco del Quindío, lleno de color, artesanías y el mejor café de altura.'
    },
    {
      name: 'Bosque Barbas Bremen',
      image: 'barbas-bremen.png',
      description: 'Adéntrate en una reserva natural hogar de los monos aulladores y una biodiversidad sorprendente.'
    },
    {
      name: 'Valle de la Carbonera',
      image: 'carbonera.png',
      description: 'Descubre el bosque de palmas de cera más grande y mejor conservado del mundo, una joya oculta.'
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
