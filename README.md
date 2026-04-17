# 🌿 Bosko Colombia - Ecoturismo y Aventura

¡Bienvenido al proyecto de **Bosko Colombia**! Una landing page moderna, rápida y atractiva diseñada para promocionar experiencias únicas de ecoturismo en el corazón del Eje Cafetero.

## 📋 Sobre el Proyecto

Bosko es una plataforma dedicada a conectar a los viajeros con la naturaleza de Colombia. Este sitio web sirve como vitrina para los tours más emblemáticos (Valle del Cocora, Filandia, Salento, etc.) y permite a los usuarios reservar directamente a través de WhatsApp.

### ✨ Características Principales
- **Diseño Premium**: Interfaces fluidas y modernas con estética de "Glassmorphism" y animaciones suaves.
- **Reserva Directa**: Integración con WhatsApp para reservas personalizadas según el tour seleccionado.
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktops.
- **SEO Ready**: Estructura semántica para mejor posicionamiento en buscadores.
- **Despliegue Automático**: Integración continua con GitHub Actions.

---

## 🛠️ Tecnologías Utilizadas

- **Core**: [Angular v21+](https://angular.io/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: SVG personalizados.
- **Despliegue**: GitHub Pages.

---

## 🚀 Inicio Rápido

### Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas:
- **Node.js**: Versión 20 o superior.
- **npm**: Versión 10 o superior (incluido con Node).

### 1. Clonar el repositorio
```bash
git clone https://github.com/Moreno716/bosko-colombia.git
cd bosko-colombia
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el servidor de desarrollo
```bash
ng serve
```
El proyecto estará disponible en `http://localhost:4200`.

---

## 📦 Construcción y Despliegue

### Generar la versión de producción
```bash
npm run build
```
Esto generará los archivos optimizados en la carpeta `dist/bosko/browser`.

### 🚀 Despliegue Automático (GitHub Actions)
Este proyecto cuenta con un flujo de trabajo automatizado. Cada vez que realices un `push` a la rama `main`, GitHub Actions:
1. Instalará las dependencias.
2. Compilará el proyecto en modo producción.
3. Desplegará automáticamente los cambios en:
   👉 **[https://moreno716.github.io/bosko-colombia/](https://moreno716.github.io/bosko-colombia/)**

---

## 📁 Estructura del Proyecto

- `src/app/app.html`: Estructura principal de la landing page.
- `src/styles.css`: Estilos globales y configuración de variables de Tailwind.
- `.github/workflows/deploy.yml`: Configuración del pipeline de CI/CD.
- `public/`: Contiene assets estáticos como imágenes y logos.

---

## ✉️ Contacto

Si tienes dudas o quieres colaborar, puedes contactarnos a través de:
- **Instagram**: [@boskoecoturismo](https://www.instagram.com/boskoecoturismo/)
- **Web**: [bosko.com](https://moreno716.github.io/bosko-colombia/)

---
*Hecho con ❤️ para la biodiversidad de Colombia.*
