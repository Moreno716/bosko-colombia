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
  currentGuideIndex = signal(0);
  guideImages = [
    'guia1.jfif',
    'guia2.jpeg'
  ];

  nextGuideImage() {
    this.currentGuideIndex.update(i => (i + 1) % this.guideImages.length);
  }

  prevGuideImage() {
    this.currentGuideIndex.update(i => (i - 1 + this.guideImages.length) % this.guideImages.length);
  }

  setGuideImage(index: number) {
    this.currentGuideIndex.set(index);
  }

  constructor() {
    setInterval(() => {
      this.nextGuideImage();
    }, 5000);
  }


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

  reviews = [
    {
      name: 'Ainhoa Ramonell Vidal',
      stars: 5,
      text: 'Una de las mejores experiencias durante nuestro viaje a Colombia. En nuestro caso hicimos La Carbonera con Jeffersson y ha sido una maravilla. Es súper cercano y amable. Sin duda muy recomendable 😀'
    },
    {
      name: 'Patricia Fernández Rivas',
      stars: 5,
      text: 'El día de hoy con Jeferson ha sido muy guay 😊 si quieres disfrutar de una zona totalmente mágica en Colombia en el eje cafetero, sentirte arropada y que vives su diversidad desde bien dentro, te recomiendo compartir tu tiempo y tu experiencia con él!!'
    },
    {
      name: 'Laura Martinez',
      stars: 5,
      text: 'Tuvimos una experiencia increíble en el Valle del Cocora gracias a Jeferson. Es un guía muy profesional, amable y con un gran conocimiento del lugar, su historia y la naturaleza que lo rodea. Siempre estuvo atento al grupo, explicó todo con claridad y transmitió mucho amor por su región. Además, hizo el recorrido muy ameno y seguro. Sin duda, lo recomendamos al 100% para conocer y disfrutar el Cocora como se debe.'
    },
    {
      name: 'Raúl Blanco',
      stars: 5,
      text: 'La experiencia con Jefferson ha sido algo fuera de lo normal. Empezando por la misma Reserva de la carbonera, un lugar mágico que con la experiencia, carisma y conocimiento de Jefferson lo han hecho aún más especial. Cuando la buena gente además es experta hace que todo merezca la pena. Gracias una y mil veces.'
    }
  ];

  scrollTo(id: string) {

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
