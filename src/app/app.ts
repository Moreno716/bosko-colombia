import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Lang = 'en' | 'es' | 'fr';

interface T {
  nav: { guide: string; tours: string; testimonials: string; book: string };
  hero: { title: string; subtitle: string; cta1: string; cta2: string };
  guide: { label: string; title: string; bio: string; feat1: string; feat2: string; feat3: string; contact: string };
  tours: { title: string; subtitle: string; bookBtn: string; close: string; waMsg: string; details: string; imgAlt: string };
  reviews: { label: string; title: string; source: string; viewAll: string };
  footer: {
    ready: string; tagline: string; nav: string; contact: string;
    home: string; guide: string; tours: string; reviews: string;
    bookBtn: string; copyright: string; waFloat: string;
  };
}

const i18n: Record<Lang, T> = {
  en: {
    nav: { guide: 'Meet your guide', tours: 'Tours', testimonials: 'Testimonials', book: 'Book Now' },
    hero: {
      title: 'Experience the Magic of the Coffee Region',
      subtitle: 'Ecotourism, adventure and authentic experiences in the heart of Colombia.',
      cta1: 'View Tours', cta2: 'Book Now'
    },
    guide: {
      label: 'Your Host', title: 'Expert Nature Guide',
      bio: 'I am your companion on this adventure. With years of experience exploring the trails of Quindío, my focus is to provide you with a safe, authentic experience deeply connected to the biodiversity of our land.',
      feat1: 'Experience in mountaineering and hiking',
      feat2: 'Local knowledge of flora and fauna',
      feat3: 'Focus on sustainable ecotourism',
      contact: 'Contact via WhatsApp'
    },
    tours: {
      title: 'Our Destinations',
      subtitle: 'We select the most iconic and stunning locations in the Coffee Region for an unforgettable experience.',
      bookBtn: 'Book this tour', close: 'Close',
      waMsg: 'Hello Bosko, I want to book the tour to ',
      details: 'View Details', imgAlt: 'Photo of '
    },
    reviews: { label: 'Testimonials', title: 'What our travelers say', source: 'Google Review', viewAll: 'See all reviews on Google' },
    footer: {
      ready: 'Ready for your next adventure?',
      tagline: 'Book your experience today and discover why the Coffee Region is one of the most incredible destinations in the world.',
      nav: 'Navigation', contact: 'Contact', home: 'Home', guide: 'Guide', tours: 'Tours', reviews: 'Reviews',
      bookBtn: 'Book your experience',
      copyright: '© 2026 Bosko Ecotourism. All rights reserved. Designed for nature lovers.',
      waFloat: 'Book via WhatsApp'
    }
  },
  es: {
    nav: { guide: '¿Quién será tu guía?', tours: 'Tours', testimonials: 'Testimonios', book: 'Reservar' },
    hero: {
      title: 'Vive la Magia del Eje Cafetero',
      subtitle: 'Ecoturismo, aventura y experiencias auténticas en el corazón de Colombia.',
      cta1: 'Ver Tours', cta2: 'Reservar'
    },
    guide: {
      label: 'Tu Anfitrión', title: 'Guía Experto en Naturaleza',
      bio: 'Soy tu acompañante en esta aventura. Con años de experiencia recorriendo los senderos del Quindío, mi enfoque es brindarte una experiencia segura, auténtica y profundamente conectada con la biodiversidad de nuestra tierra.',
      feat1: 'Experiencia en montañismo y senderismo',
      feat2: 'Conocimiento local de flora y fauna',
      feat3: 'Enfoque en ecoturismo sostenible',
      contact: 'Contactar por WhatsApp'
    },
    tours: {
      title: 'Nuestros Destinos',
      subtitle: 'Seleccionamos los lugares más emblemáticos y sorprendentes del Eje Cafetero para que vivas una experiencia inolvidable.',
      bookBtn: 'Reservar tour', close: 'Cerrar',
      waMsg: 'Hola Bosko, quiero reservar el tour a ',
      details: 'Ver Detalles', imgAlt: 'Foto de '
    },
    reviews: { label: 'Testimonios', title: 'Lo que dicen nuestros viajeros', source: 'Reseña de Google', viewAll: 'Ver todas las reseñas en Google' },
    footer: {
      ready: '¿Listo para tu próxima aventura?',
      tagline: 'Reserva tu experiencia hoy mismo y descubre por qué el Eje Cafetero es uno de los destinos más increíbles del mundo.',
      nav: 'Navegación', contact: 'Contacto', home: 'Inicio', guide: 'Guía', tours: 'Tours', reviews: 'Reseñas',
      bookBtn: 'Reserva tu experiencia',
      copyright: '© 2026 Bosko Ecoturismo. Todos los derechos reservados. Diseñado para amantes de la naturaleza.',
      waFloat: 'Reserva por WhatsApp'
    }
  },
  fr: {
    nav: { guide: 'Votre guide', tours: 'Tours', testimonials: 'Témoignages', book: 'Réserver' },
    hero: {
      title: 'Vivez la Magie de la Région Caféière',
      subtitle: 'Écotourisme, aventure et expériences authentiques au cœur de la Colombie.',
      cta1: 'Voir les tours', cta2: 'Réserver'
    },
    guide: {
      label: 'Votre hôte', title: 'Guide Expert en Nature',
      bio: "Je suis votre compagnon dans cette aventure. Avec des années d'expérience à parcourir les sentiers de Quindío, mon objectif est de vous offrir une expérience sûre, authentique et profondément liée à la biodiversité de notre terre.",
      feat1: 'Expérience en alpinisme et randonnée',
      feat2: 'Connaissance locale de la flore et de la faune',
      feat3: "Focus sur l'écotourisme durable",
      contact: 'Contacter via WhatsApp'
    },
    tours: {
      title: 'Nos Destinations',
      subtitle: "Nous sélectionnons les lieux les plus emblématiques de la Région Caféière pour une expérience inoubliable.",
      bookBtn: 'Réserver ce tour', close: 'Fermer',
      waMsg: 'Bonjour Bosko, je veux réserver le tour vers ',
      details: 'Voir les détails', imgAlt: 'Photo de '
    },
    reviews: { label: 'Témoignages', title: 'Ce que disent nos voyageurs', source: 'Avis Google', viewAll: 'Voir tous les avis sur Google' },
    footer: {
      ready: 'Prêt pour votre prochaine aventure ?',
      tagline: "Réservez votre expérience aujourd'hui et découvrez pourquoi la Région Caféière est l'une des destinations les plus incroyables du monde.",
      nav: 'Navigation', contact: 'Contact', home: 'Accueil', guide: 'Guide', tours: 'Tours', reviews: 'Avis',
      bookBtn: 'Réservez votre expérience',
      copyright: '© 2026 Bosko Écotourisme. Tous droits réservés. Conçu pour les amoureux de la nature.',
      waFloat: 'Réserver via WhatsApp'
    }
  }
};

export interface Tour {
  name: string;
  images: string[];
  description: Record<Lang, string>;
  detail: Record<Lang, string>;
}

export interface Review {
  name: string;
  stars: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  lang = signal<Lang>('en');
  t = computed(() => i18n[this.lang()]);

  readonly langOptions = [
    { code: 'en' as Lang, flag: '🇺🇸', label: 'English' },
    { code: 'es' as Lang, flag: '🇨🇴', label: 'Español' },
    { code: 'fr' as Lang, flag: '🇫🇷', label: 'Français' },
  ];
  selectLang(code: Lang) { this.lang.set(code); }

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  toggleMobileMenu() { this.mobileMenuOpen.update(v => !v); }
  closeMobileMenu() { this.mobileMenuOpen.set(false); }

  currentGuideIndex = signal(0);
  guideImages = ['guia1.jfif', 'guia2.jpeg'];
  nextGuideImage() { this.currentGuideIndex.update(i => (i + 1) % this.guideImages.length); }
  prevGuideImage() { this.currentGuideIndex.update(i => (i - 1 + this.guideImages.length) % this.guideImages.length); }
  setGuideImage(index: number) { this.currentGuideIndex.set(index); }

  tours: Tour[] = [
    {
      name: 'Valle del Cocora',
      images: ['valle-del-cocora.png', 'salento.png', 'carbonera.png'],
      description: {
        en: 'Walk among the tallest wax palms in the world in a dreamlike misty landscape.',
        es: 'Camina entre las palmas de cera más altas del mundo en un paisaje de ensueño envuelto en niebla.',
        fr: 'Marchez parmi les plus grands palmiers à cire du monde dans un paysage onirique enveloppé de brume.'
      },
      detail: {
        en: "Valle del Cocora is the iconic valley of the Coffee Region, home to the wax palm — Colombia's national tree and the tallest palm in the world, reaching up to 60 metres. Walking through the mist among these giant palms is a truly magical experience. The trail leads you through cloud forest, hanging bridges, and breathtaking viewpoints. You may spot hummingbirds, orchids, and if you're lucky, the elusive spectacled bear. Duration: 4–6 hours | Difficulty: Moderate.",
        es: "El Valle del Cocora es el icónico valle del Eje Cafetero, hogar de la palma de cera — el árbol nacional de Colombia y la palma más alta del mundo, llegando hasta 60 metros. Caminar entre la niebla rodeado de estas gigantescas palmas es una experiencia verdaderamente mágica. El sendero te lleva por bosque nublado, puentes colgantes y miradores impresionantes. Podrás ver colibríes, orquídeas y, si tienes suerte, el esquivo oso de anteojos. Duración: 4–6 horas | Dificultad: Moderada.",
        fr: "La Vallée du Cocora est l'emblématique vallée de la Région Caféière, abritant le palmier à cire — arbre national de Colombie et palmier le plus haut du monde, atteignant jusqu'à 60 mètres. Marcher dans la brume parmi ces immenses palmiers est une expérience vraiment magique. Le sentier traverse une forêt nuageuse, des ponts suspendus et des points de vue à couper le souffle. Vous pourrez observer des colibris, des orchidées et, avec de la chance, l'insaisissable ours à lunettes. Durée : 4–6 h | Difficulté : Modérée."
      }
    },
    {
      name: 'Salento',
      images: ['salento.png', 'valle-del-cocora.png', 'guia2.jpeg'],
      description: {
        en: 'Explore the most picturesque village of Quindío, full of colour, crafts and the finest highland coffee.',
        es: 'Explora el pueblo más pintoresco del Quindío, lleno de color, artesanías y el mejor café de altura.',
        fr: "Explorez le village le plus pittoresque de Quindío, plein de couleurs, d'artisanat et du meilleur café d'altitude."
      },
      detail: {
        en: "Salento is a living testament to traditional Antioquian architecture — colourful balconies, cobblestone streets and a main plaza buzzing with life. Wander through artisan shops selling handmade wax palm figurines, sip freshly brewed mountain coffee on a café terrace, and soak in the panoramic views from the Alto de la Cruz viewpoint. The surrounding coffee farms offer authentic farm-to-cup experiences. Duration: Full day | Difficulty: Easy.",
        es: "Salento es un testimonio vivo de la arquitectura tradicional antioqueña: coloridos balcones, calles empedradas y una plaza principal llena de vida. Recorre las tiendas artesanales con figuritas de palma de cera hechas a mano, saborea un café de altura recién preparado en una terraza y disfruta las vistas panorámicas desde el Alto de la Cruz. Las fincas cafeteras del entorno ofrecen experiencias auténticas del campo a la taza. Duración: Día completo | Dificultad: Fácil.",
        fr: "Salento est un témoignage vivant de l'architecture antioquienne traditionnelle : balcons colorés, rues pavées et place principale animée. Flânez dans les boutiques artisanales vendant des figurines de palmier à cire faites main, dégustez un café de montagne fraîchement préparé en terrasse et profitez des vues panoramiques depuis le Alto de la Cruz. Les fermes caféières environnantes proposent d'authentiques expériences du champ à la tasse. Durée : Journée complète | Difficulté : Facile."
      }
    },
    {
      name: 'Bosque Barbas Bremen',
      images: ['barbas-bremen.png', 'carbonera.png', 'guia1.jfif'],
      description: {
        en: 'Venture into a natural reserve, home to howler monkeys and incredible biodiversity.',
        es: 'Adéntrate en una reserva natural hogar de los monos aulladores y una biodiversidad sorprendente.',
        fr: "Plongez dans une réserve naturelle abritant des singes hurleurs et une biodiversité impressionnante."
      },
      detail: {
        en: "Bosque Barbas Bremen is a natural reserve of extraordinary biodiversity. The howler monkey's roar is your soundtrack as you explore misty cloud forest draped in mosses and bromeliads. More than 300 bird species have been recorded here — a paradise for birdwatchers. Crystal-clear streams and hidden waterfalls punctuate the ancient trails, and endemic plants grow at every step. A deeply immersive nature experience far from the tourist crowds. Duration: 5–7 hours | Difficulty: Moderate–Demanding.",
        es: "El Bosque Barbas Bremen es una reserva natural de extraordinaria biodiversidad. El rugido del mono aullador es tu banda sonora mientras exploras un bosque nublado cubierto de musgos y bromelias. Se han registrado más de 300 especies de aves aquí — un paraíso para los observadores de pájaros. Quebradas cristalinas y cascadas ocultas jalonan los senderos ancestrales, y plantas endémicas crecen a cada paso. Una experiencia natural profundamente inmersiva, lejos de las multitudes turísticas. Duración: 5–7 horas | Dificultad: Moderada–Exigente.",
        fr: "Le Bosque Barbas Bremen est une réserve naturelle d'une biodiversité extraordinaire. Le rugissement du singe hurleur vous accompagne tandis que vous explorez une forêt nuageuse drapée de mousses et de broméliacées. Plus de 300 espèces d'oiseaux y ont été recensées — un paradis pour les ornithologues. Des ruisseaux cristallins et des cascades cachées ponctuent les sentiers ancestraux, et des plantes endémiques poussent à chaque pas. Une expérience naturelle profondément immersive, loin des foules touristiques. Durée : 5–7 h | Difficulté : Modérée–Exigeante."
      }
    },
    {
      name: 'Valle de la Carbonera',
      images: ['carbonera.png', 'valle-del-cocora.png', 'barbas-bremen.png'],
      description: {
        en: 'Discover the largest and best-preserved wax palm forest in the world — a hidden gem.',
        es: 'Descubre el bosque de palmas de cera más grande y mejor conservado del mundo, una joya oculta.',
        fr: "Découvrez la plus grande forêt de palmiers à cire du monde, la mieux conservée — un joyau caché."
      },
      detail: {
        en: "Valle de la Carbonera is Colombia's best-kept natural secret: the largest and best-preserved wax palm forest on the planet. Unlike the more visited Cocora, La Carbonera offers an intimate off-the-beaten-path journey through dense palm groves stretching toward the sky. The silence here is profound, broken only by birdsong and the rustle of fronds in the breeze. Fewer visitors, pristine nature, and an unforgettable sense of solitude and wonder. Duration: 4–6 hours | Difficulty: Moderate.",
        es: "El Valle de la Carbonera es el mejor secreto natural de Colombia: el bosque de palmas de cera más grande y mejor conservado del planeta. A diferencia del más visitado Cocora, La Carbonera ofrece una travesía íntima y fuera de los caminos trillados a través de densos palmares que se elevan hacia el cielo. El silencio aquí es profundo, roto solo por el canto de los pájaros y el susurro de las hojas con la brisa. Menos visitantes, naturaleza prístina y una sensación inolvidable de soledad y asombro. Duración: 4–6 horas | Dificultad: Moderada.",
        fr: "La Vallée de la Carbonera est le meilleur secret naturel de Colombie : la plus grande et la mieux conservée forêt de palmiers à cire de la planète. Contrairement au Cocora plus fréquenté, La Carbonera offre un voyage intime hors des sentiers battus à travers de denses palmeraies s'élevant vers le ciel. Le silence y est profond, brisé seulement par le chant des oiseaux et le bruissement des feuilles dans la brise. Moins de visiteurs, une nature préservée et un inoubliable sentiment de solitude et d'émerveillement. Durée : 4–6 h | Difficulté : Modérée."
      }
    }
  ];

  tourCarouselIndex = signal(0);
  nextTourCard() { this.tourCarouselIndex.update(i => (i + 1) % this.tours.length); }
  prevTourCard() { this.tourCarouselIndex.update(i => (i - 1 + this.tours.length) % this.tours.length); }
  setTourCard(i: number) { this.tourCarouselIndex.set(i); }

  selectedTour = signal<Tour | null>(null);
  tourImageIndex = signal(0);

  openTour(tour: Tour) {
    this.selectedTour.set(tour);
    this.tourImageIndex.set(0);
    if (typeof document !== 'undefined') document.body.classList.add('modal-open');
  }

  closeTour() {
    this.selectedTour.set(null);
    if (typeof document !== 'undefined') document.body.classList.remove('modal-open');
  }

  nextTourImage() {
    const tour = this.selectedTour();
    if (tour) this.tourImageIndex.update(i => (i + 1) % tour.images.length);
  }

  prevTourImage() {
    const tour = this.selectedTour();
    if (tour) this.tourImageIndex.update(i => (i - 1 + tour.images.length) % tour.images.length);
  }

  setTourImage(index: number) { this.tourImageIndex.set(index); }

  getWaUrl(tourName: string): string {
    const msg = this.t().tours.waMsg + tourName;
    return 'https://wa.me/573225010082?text=' + encodeURIComponent(msg);
  }

  allReviews: Review[] = [
    {
      name: 'Ainhoa Ramonell Vidal', stars: 5,
      text: 'Una de las mejores experiencias durante nuestro viaje a Colombia. En nuestro caso hicimos La Carbonera con Jeffersson y ha sido una maravilla. Es súper cercano y amable. Sin duda muy recomendable 😀'
    },
    {
      name: 'Patricia Fernández Rivas', stars: 5,
      text: 'El día de hoy con Jeferson ha sido muy guay 😊 si quieres disfrutar de una zona totalmente mágica en Colombia en el eje cafetero, sentirte arropada y que vives su diversidad desde bien dentro, te recomiendo compartir tu tiempo y tu experiencia con él!!'
    },
    {
      name: 'Laura Martinez', stars: 5,
      text: 'Tuvimos una experiencia increíble en el Valle del Cocora gracias a Jeferson. Es un guía muy profesional, amable y con un gran conocimiento del lugar, su historia y la naturaleza que lo rodea. Siempre estuvo atento al grupo y transmitió mucho amor por su región. Sin duda, lo recomendamos al 100%.'
    },
    {
      name: 'Raúl Blanco', stars: 5,
      text: 'La experiencia con Jefferson ha sido algo fuera de lo normal. Empezando por la misma Reserva de la carbonera, un lugar mágico que con la experiencia, carisma y conocimiento de Jefferson lo han hecho aún más especial. Cuando la buena gente además es experta hace que todo merezca la pena. Gracias una y mil veces.'
    },
    {
      name: 'Sophie Dubois', stars: 5,
      text: "Jeferson est un guide extraordinaire! Nous avons fait le tour de la Vallée du Cocora et c'était absolument magnifique. Il connaît parfaitement la flore et la faune locales et partage sa passion avec beaucoup d'enthousiasme. Je recommande vivement cette expérience à tous les amoureux de la nature."
    },
    {
      name: 'John Williams', stars: 5,
      text: "One of the highlights of my trip to Colombia. Jefferson took us through Barbas Bremen forest and it was absolutely stunning — howler monkeys, exotic birds, ancient trees. He's incredibly knowledgeable, patient and passionate about his region. Book this tour, you won't regret it!"
    },
    {
      name: 'María García', stars: 5,
      text: 'Jeferson es sin duda el mejor guía del Eje Cafetero. Hicimos el tour a Salento y al Valle del Cocora y cada momento fue especial. Su conocimiento sobre la palma de cera y la fauna del lugar es impresionante. Un profesional muy comprometido con el ecoturismo sostenible. ¡Volveremos!'
    },
    {
      name: 'Thomas Müller', stars: 5,
      text: 'Absolutely fantastic experience! Jefferson guided us through Valle de la Carbonera — a place unlike anything I have ever seen. Thousands of wax palms reaching into the clouds. Jefferson made the whole experience educational, safe and deeply moving. A truly special human being.'
    },
    {
      name: 'Ana Martínez', stars: 5,
      text: 'Qué experiencia tan bonita la que vivimos con Jeferson en el Bosque Barbas Bremen. Los monos aulladores, las aves, la vegetación... todo era como estar en otro mundo. Jeferson estuvo pendiente de todos y nos explicó muchísimas cosas interesantes. Totalmente recomendado. 🌿'
    },
    {
      name: 'Claire Bernard', stars: 5,
      text: "Nous avons passé une journée inoubliable à Salento et dans la Vallée du Cocora avec Jeferson. Son enthousiasme et sa connaissance profonde de la région transforment une simple randonnée en une expérience enrichissante et mémorable. Merci infiniment pour ces moments magiques en Colombie !"
    },
    {
      name: 'Carlos Mendoza', stars: 5,
      text: 'Llevé a mi familia a conocer el Valle de la Carbonera con Jeferson y fue una decisión perfecta. Mis hijos quedaron maravillados con las palmas de cera y Jeferson supo adaptar el recorrido para que todos disfrutaran al máximo. Un guía que realmente ama lo que hace. ¡Los mejores!'
    },
    {
      name: 'Robert Johnson', stars: 5,
      text: "Jefferson's passion for the Colombian Coffee Region is truly infectious. He took us on an amazing hike through the cloud forest and showed us hidden waterfalls we would never have found on our own. His knowledge of local wildlife is impressive and his English is great too. Highest recommendation!"
    }
  ];

  readonly reviewsPerPage = 4;
  reviewPage = signal(0);
  totalReviewPages = computed(() => Math.ceil(this.allReviews.length / this.reviewsPerPage));
  visibleReviews = computed(() => {
    const start = this.reviewPage() * this.reviewsPerPage;
    return this.allReviews.slice(start, start + this.reviewsPerPage);
  });
  // Keyed version: page# in key forces Angular to recreate DOM → CSS animation triggers
  visibleReviewsKeyed = computed(() => {
    const page = this.reviewPage();
    const start = page * this.reviewsPerPage;
    return this.allReviews.slice(start, start + this.reviewsPerPage)
      .map((r, i) => ({ ...r, _key: `${r.name}_p${page}_${i}` }));
  });

  nextReviewPage() { this.reviewPage.update(p => (p + 1) % this.totalReviewPages()); }
  prevReviewPage() { this.reviewPage.update(p => (p - 1 + this.totalReviewPages()) % this.totalReviewPages()); }
  setReviewPage(p: number) { this.reviewPage.set(p); }

  @HostListener('window:scroll', [])
  onWindowScroll() { this.isScrolled.set(window.scrollY > 50); }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.selectedTour()) this.closeTour();
  }

  constructor() {
    setInterval(() => this.nextGuideImage(), 5000);
    setInterval(() => this.nextReviewPage(), 12000);
    setInterval(() => this.nextTourCard(), 5000);
  }

  scrollTo(id: string) {
    this.closeMobileMenu();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
