import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Lang = 'en' | 'es' | 'fr';

interface T {
  nav: { guide: string; tours: string; testimonials: string; book: string };
  hero: { title: string; subtitle: string; cta1: string; cta2: string };
  guide: { label: string; title: string; bio: string; feat1: string; feat2: string; feat3: string; contact: string };
  tours: { title: string; subtitle: string; customNote: string; bookBtn: string; close: string; waMsg: string; details: string; imgAlt: string };
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
      bio: "Hello everyone, my name is Jeffersson Moreno Castañeda. I am a local guide who has enjoyed every one of the experiences you see here since I was a child, and today I am deeply grateful to life for allowing me to turn my passion into a profession and to have the greenest and most beautiful office in the world. I'll be here waiting for you, ready to share great moments together and explore the most beautiful places in my homeland. Our company Bosko Ecoturismo is more than a simple travel agency — we are friends, a family that grows every day around our love for nature and everything that flourishes with it. Reach out to me directly through our contact lines and ask me anything you like. This is not just about selling, but about making sure you truly enjoy your time in the most beautiful country on earth.",
      feat1: 'Local guide passionate about his region since childhood',
      feat2: 'Authentic and personalised experiences for every traveller',
      feat3: 'A family committed to nature and responsible tourism',
      contact: 'Contact via WhatsApp'
    },
    tours: {
      title: 'Our Destinations',
      subtitle: 'We select the most iconic and stunning locations in the Coffee Region for an unforgettable experience.',
      customNote: 'These are our 3 main activities, but if you\'d like to explore another destination or personalise your experience, feel free to ask — together we\'ll design the perfect tour for you!',
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
      bio: 'Hola a todos, mi nombre es Jeffersson Moreno Castañeda, soy un guía local que ha disfrutado de todos los planes que pueden ver desde que soy un niño y hoy en día agradezco enormemente a la vida por permitir convertir mi pasión en un trabajo y poder tener la oficina más verde y hermosa del mundo. Así que aquí te espero para compartir grandes momentos juntos y para recorrer los lugares más hermosos de mi territorio. Además, nuestra empresa Bosko Ecoturismo es más que una simple agencia de viajes, somos amigos, una familia que cada día crece más entorno al amor por la naturaleza y los procesos que crecen a su alrededor. Habla directamente conmigo a través de nuestras líneas de contacto y pregunta lo que quieras, esto no se trata solo de vender sino de que disfrutes tu estadía realmente en el país de la belleza.',
      feat1: 'Guía local apasionado por su región desde la infancia',
      feat2: 'Experiencias auténticas y personalizadas para cada viajero',
      feat3: 'Una familia comprometida con la naturaleza y el turismo responsable',
      contact: 'Contactar por WhatsApp'
    },
    tours: {
      title: 'Nuestros Destinos',
      subtitle: 'Seleccionamos los lugares más emblemáticos y sorprendentes del Eje Cafetero para que vivas una experiencia inolvidable.',
      customNote: 'Estas son nuestras 3 actividades principales, pero si deseas explorar otro destino o personalizar tu experiencia, no dudes en preguntarme — ¡juntos diseñamos el tour perfecto para ti!',
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
      bio: "Bonjour à tous, je m'appelle Jeffersson Moreno Castañeda. Je suis un guide local qui profite de tous les circuits que vous voyez ici depuis que j'étais enfant, et aujourd'hui je suis profondément reconnaissant à la vie de m'avoir permis de transformer ma passion en métier et d'avoir le bureau le plus vert et le plus beau du monde. Je vous attends ici pour partager de beaux moments ensemble et parcourir les plus beaux endroits de mon territoire. Notre entreprise Bosko Ecoturismo est bien plus qu'une simple agence de voyages : nous sommes des amis, une famille qui grandit chaque jour autour de l'amour de la nature et des richesses qui l'entourent. Contactez-moi directement via nos lignes et posez-moi toutes vos questions — il ne s'agit pas seulement de vendre, mais de vous faire vivre un séjour inoubliable dans le plus beau pays du monde.",
      feat1: 'Guide local passionné par sa région depuis l\'enfance',
      feat2: 'Expériences authentiques et personnalisées pour chaque voyageur',
      feat3: 'Une famille engagée pour la nature et le tourisme responsable',
      contact: 'Contacter via WhatsApp'
    },
    tours: {
      title: 'Nos Destinations',
      subtitle: "Nous sélectionnons les lieux les plus emblématiques de la Région Caféière pour une expérience inoubliable.",
      customNote: "Ce sont nos 3 activités principales, mais si vous souhaitez explorer une autre destination ou personnaliser votre expérience, n'hésitez pas à nous demander — ensemble, nous concevrons le tour parfait pour vous !",
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
  /** Landscape photo used on the carousel card (most gallery photos are vertical). */
  cover: string;
  /** CSS object-position that keeps the subject visible when the cover is cropped. */
  coverPosition: string;
  /** Mirror the cover so the subject sits away from the text overlay on the left. */
  coverFlip?: boolean;
  /** Gallery in display order (photos and videos mixed on purpose). */
  media: Media[];
  description: Record<Lang, string>;
  detail: Record<Lang, string>;
}

export interface Review {
  name: string;
  stars: number;
  text: string;
}

export interface Media {
  type: 'image' | 'video';
  src: string;
}

/**
 * Builds a gallery in the given order. A number is a photo `<prefix><n>.jpg`;
 * a string like 'v3' is the video `<prefix>_video3.mp4`.
 */
function gallery(prefix: string, order: (number | string)[]): Media[] {
  return order.map(item => typeof item === 'number'
    ? { type: 'image' as const, src: `${prefix}${item}.jpg` }
    : { type: 'video' as const, src: `${prefix}_video${item.slice(1)}.mp4` });
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
      cover: 'valle-del-cocora.png',
      coverPosition: 'center 45%',
      media: ['valle-del-cocora.png', 'salento.png', 'carbonera.png'].map(src => ({ type: 'image' as const, src })),
      description: {
        en: 'Valle del Cocora 5 km or 11 km: come and visit with us the beautiful Valle del Cocora and the magnificent wax palm of Quindío.',
        es: 'Valle del Cocora 5 km o 11 km: ven a visitar con nosotros el hermoso Valle del Cocora y la imponente palma de cera del Quindío.',
        fr: 'Valle del Cocora 5 km ou 11 km : venez visiter avec nous le magnifique Valle del Cocora et l\'imposant palmier à cire du Quindío.'
      },
      detail: {
        en: "The Valle del Cocora is one of the most iconic places in the Coffee Region. This beautiful valley, born in the highlands of Quindío, is one of the most magical destinations for our visitors. Let yourself fall in love with its history, its biodiversity, and the beautiful mountains that surround this stunning part of the Colombian Andes during a very special hike through these breathtaking landscapes, all guided by our knowledgeable local guides. This activity offers a variety of options and possibilities to organise and personalise your experience according to your interests, so don't hesitate to reach out to me — I'll help you arrange your stay in the most convenient way possible.",
        es: "El Valle del Cocora es uno de los lugares más emblemáticos del Eje Cafetero. Este hermoso valle que nace en el alto Quindío es uno de los lugares que más magia ofrecen a nuestros visitantes. Déjate enamorar de su historia, su biodiversidad y las montañas hermosas que rodean esta linda parte de la cordillera de los Andes en un hiking muy especial en medio de estos imponentes paisajes y toda la información brindada por nuestros guías locales. Esta actividad cuenta con diferentes opciones y posibilidades de organizar y personalizar tu experiencia de acuerdo con tu interés, así que no dudes en contactarme y te ayudo a arreglar tu estadía de la manera más conveniente.",
        fr: "La Vallée del Cocora est l'un des endroits les plus emblématiques de la Région Caféière. Cette magnifique vallée, née dans les hautes terres du Quindío, est l'un des lieux qui offrent le plus de magie à nos visiteurs. Laissez-vous séduire par son histoire, sa biodiversité et les belles montagnes qui entourent cette belle partie de la cordillère des Andes lors d'une randonnée très spéciale au milieu de ces paysages imposants, avec toutes les informations de nos guides locaux. Cette activité propose différentes options et possibilités d'organiser et de personnaliser votre expérience selon vos intérêts, alors n'hésitez pas à me contacter et je vous aiderai à organiser votre séjour de la façon la plus pratique possible."
      }
    },
    {
      name: 'La Carbonera & Cañón de Tochecito Jeep Tour',
      cover: 'carbonera_tochecito/carbonera1.jpg',
      coverPosition: 'center',
      // Alternates people/landscape with wildlife, never two similar shots in a row.
      media: gallery('carbonera_tochecito/carbonera', [
        1, 2, 10, 5, 12, 3, 16, 21, 11, 4, 14, 22, 20, 6, 17, 25,
        15, 8, 23, 33, 19, 27, 7, 13, 26, 32, 24, 9, 29, 30, 28, 18
      ]),
      description: {
        en: 'Come and enjoy with us the incredible largest wax palm forest in the world — a truly unique place on our planet.',
        es: 'Ven con nosotros a disfrutar del increíble bosque de palmas de cera más grande del mundo, un lugar único en nuestro planeta.',
        fr: 'Venez avec nous découvrir l\'incroyable plus grande forêt de palmiers à cire du monde, un endroit unique sur notre planète.'
      },
      detail: {
        en: "The Cañón de Tochecito, better known as La Carbonera, is that hidden treasure that few people talk about and even fewer have ever seen. This place is a combination of history, wealth, nature, magic, and incredible contrasts. Thanks to our team, we are able to offer this tour, which is one of my must-dos in Salento. La Carbonera is home to around 600,000 wax palms, making it the largest palm forest in the world in its category. Here we will explore a region far from mass tourism, rich in species and conservation, and the home of our beautiful yellow-eared parrot — a species endemic to the Andes that, along with more than 400 other types of birds recorded at the site, adorns the magnificent Cañón de Tochecito.",
        es: "El cañón de Tochecito, más conocido como La Carbonera, es ese tesoro escondido del que pocas personas hablan y muchas menos conocen. Este lugar es una combinación de historia, riqueza, naturaleza, magia e increíbles contrastes. Gracias a nuestro equipo de trabajo podemos disfrutar de este tour que es uno de mis infaltables en Salento. La Carbonera alberga alrededor de 600.000 palmas de cera, siendo el bosque de palmas más grande del mundo en su categoría. Aquí vamos a disfrutar de una zona alejada del turismo masivo, rica en especies y conservación, y el hogar de nuestro hermoso loro orejiamarillo, una especie endémica de los Andes que, junto a otros más de 400 tipos de aves registradas en el lugar, decoran el maravilloso cañón de Tochecito.",
        fr: "Le Cañón de Tochecito, plus connu sous le nom de La Carbonera, est ce trésor caché dont peu de personnes parlent et que très peu connaissent. Cet endroit est une combinaison d'histoire, de richesse, de nature, de magie et de contrastes incroyables. Grâce à notre équipe, nous pouvons profiter de ce tour qui est l'un de mes incontournables à Salento. La Carbonera abrite environ 600 000 palmiers à cire, ce qui en fait la plus grande forêt de palmiers du monde dans sa catégorie. Ici, nous allons profiter d'une zone éloignée du tourisme de masse, riche en espèces et en préservation, et qui est le foyer de notre beau perroquet aux oreilles jaunes — une espèce endémique des Andes qui, avec plus de 400 autres types d'oiseaux recensés sur le site, décore le merveilleux Cañón de Tochecito."
      }
    },
    {
      name: 'Reserva Natural Barbas Bremen & Filandia Tour',
      cover: 'barbasBremen_filandia/bremen15.jpg',
      coverPosition: 'center 55%',
      coverFlip: true,
      // Howler monkey photo + video up front; videos and wildlife spread through the rest.
      media: gallery('barbasBremen_filandia/bremen', [
        1, 'v3', 4, 2, 40, 10, 19, 11, 'v1', 23, 13, 15, 3, 31, 21, 34, 12, 'v2', 28, 14,
        24, 20, 6, 22, 26, 27, 9, 29, 32, 30, 5, 38, 18, 39, 43, 41, 17, 16, 25, 7, 33
      ]),
      description: {
        en: "Let's go together to visit the most beautiful village in Colombia and the largest forest in Quindío, full of life and our wonderful howler monkeys.",
        es: 'Vamos juntos a visitar el pueblo más lindo de Colombia y el bosque más grande del Quindío lleno de vida y nuestros lindos monos aulladores.',
        fr: 'Partons ensemble visiter le plus beau village de Colombie et la plus grande forêt du Quindío, pleine de vie et de nos adorables singes hurleurs.'
      },
      detail: {
        en: "Barbas Bremen is a natural reserve with a highly important protected area for our territory, home to a great variety of native species: a dense and incredibly diverse forest, birds, insects, and our wonderful howler monkeys. On this tour we offer different options to suit the conditions of each of our guests — ask me directly about all available options.",
        es: "Barbas Bremen es una reserva natural que cuenta con un área protegida bastante importante para nuestro territorio y que alberga una gran cantidad de especies nativas, un bosque denso y muy diverso, aves, insectos y nuestros lindos monos aulladores. En este recorrido ofrecemos diferentes opciones de acuerdo a las condiciones de cada uno de nuestros invitados, pregúntame directamente por todas las opciones.",
        fr: "Barbas Bremen est une réserve naturelle qui dispose d'une zone protégée d'une grande importance pour notre territoire et qui abrite une grande variété d'espèces natives : une forêt dense et très diversifiée, des oiseaux, des insectes et nos adorables singes hurleurs. Sur ce circuit, nous proposons différentes options en fonction des conditions de chacun de nos invités — demandez-moi directement toutes les options disponibles."
      }
    }
  ];

  readonly tourAutoplayMs = 12000;
  private tourTimer?: ReturnType<typeof setInterval>;
  tourCarouselIndex = signal(0);
  nextTourCard() { this.tourCarouselIndex.update(i => (i + 1) % this.tours.length); this.startTourAutoplay(); }
  prevTourCard() { this.tourCarouselIndex.update(i => (i - 1 + this.tours.length) % this.tours.length); this.startTourAutoplay(); }
  setTourCard(i: number) { this.tourCarouselIndex.set(i); this.startTourAutoplay(); }

  /** (Re)starts the autoplay so a manual click always gets the full reading time. */
  private startTourAutoplay() {
    clearInterval(this.tourTimer);
    this.tourTimer = setInterval(() => {
      // Don't slide behind an open gallery modal.
      if (this.selectedTour()) return;
      this.tourCarouselIndex.update(i => (i + 1) % this.tours.length);
    }, this.tourAutoplayMs);
  }

  selectedTour = signal<Tour | null>(null);
  galleryMediaIndex = signal(0);

  currentTourMedia = computed(() => this.selectedTour()?.media ?? []);

  currentMedia = computed(() => this.currentTourMedia()[this.galleryMediaIndex()] ?? null);

  openTour(tour: Tour) {
    this.selectedTour.set(tour);
    this.galleryMediaIndex.set(0);
    if (typeof document !== 'undefined') document.body.classList.add('modal-open');
  }

  closeTour() {
    this.selectedTour.set(null);
    if (typeof document !== 'undefined') document.body.classList.remove('modal-open');
  }

  nextGalleryMedia() {
    const total = this.currentTourMedia().length;
    this.setGalleryMedia((this.galleryMediaIndex() + 1) % total);
  }

  prevGalleryMedia() {
    const total = this.currentTourMedia().length;
    this.setGalleryMedia((this.galleryMediaIndex() - 1 + total) % total);
  }

  setGalleryMedia(index: number) {
    this.galleryMediaIndex.set(index);
    if (typeof document === 'undefined') return;
    setTimeout(() => document.getElementById('thumb-' + index)
      ?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
  }

  /** Starts the video on arrival; if the browser refuses sound, retries muted (user can unmute). */
  autoplayVideo(e: Event) {
    const video = e.target as HTMLVideoElement;
    if (!video.paused) return;
    video.play().catch(() => {
      video.muted = true;
      video.play().catch(() => {});
    });
  }

  /** Small version of a gallery photo (generated under a `thumbs/` folder next to it). */
  thumb(src: string): string {
    return src.replace(/([^/]+)$/, 'thumbs/$1').replace(/\.mp4$/, '.jpg');
  }

  // Swipe / drag with finger or mouse (pointer events cover both).
  private swipeX = 0;
  private swiped = false;
  swipeStart(e: PointerEvent) { this.swipeX = e.clientX; this.swiped = false; }
  swipeEnd(e: PointerEvent, next: () => void, prev: () => void) {
    // Let video controls (seek bar, volume) work without changing slide.
    if ((e.target as HTMLElement).tagName === 'VIDEO') return;
    const dx = e.clientX - this.swipeX;
    if (Math.abs(dx) < 50) return;
    this.swiped = true;
    if (dx < 0) next(); else prev();
  }
  swipeGalleryEnd(e: PointerEvent) {
    this.swipeEnd(e, () => this.nextGalleryMedia(), () => this.prevGalleryMedia());
  }
  swipeTourEnd(e: PointerEvent) {
    this.swipeEnd(e, () => this.nextTourCard(), () => this.prevTourCard());
  }
  /** A swipe on a tour card must not also open it. */
  onTourCardClick(tour: Tour) {
    if (this.swiped) { this.swiped = false; return; }
    this.openTour(tour);
  }

  // Mouse drag-to-scroll for the thumbnail strip (touch already scrolls natively).
  private strip?: { x: number; left: number };
  private stripMoved = false;
  stripDown(e: PointerEvent, el: HTMLElement) {
    if (e.pointerType !== 'mouse') return;
    this.strip = { x: e.clientX, left: el.scrollLeft };
    this.stripMoved = false;
  }
  stripMove(e: PointerEvent, el: HTMLElement) {
    if (!this.strip) return;
    const dx = e.clientX - this.strip.x;
    if (Math.abs(dx) > 5) this.stripMoved = true;
    el.scrollLeft = this.strip.left - dx;
  }
  stripUp() { this.strip = undefined; }
  onThumbClick(index: number) {
    if (this.stripMoved) { this.stripMoved = false; return; }
    this.setGalleryMedia(index);
  }

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

  @HostListener('document:keydown.arrowright')
  onArrowRight() { if (this.selectedTour()) this.nextGalleryMedia(); }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft() { if (this.selectedTour()) this.prevGalleryMedia(); }

  constructor() {
    setInterval(() => this.nextGuideImage(), 5000);
    setInterval(() => this.nextReviewPage(), 12000);
    this.startTourAutoplay();
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
