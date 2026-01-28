# 🎬 Movie App – Vanilla JS SPA

Aplicación web tipo **SPA (Single Page Application)** para consultar películas usando la **API de The Movie Database (TMDB)**.

El proyecto está construido **sin frameworks**, utilizando únicamente **HTML**, **JavaScript Vanilla** y **Tailwind CSS**, con una arquitectura modular y escalable.

---

## 🚀 Tecnologías utilizadas

- **HTML5**
- **JavaScript (ES Modules)**
- **Tailwind CSS (CDN)**
- **API pública de TMDB**

❌ No se utilizan frameworks como React, Angular o Vue  
❌ No se utilizan librerías externas de estado o routing

---

## 📌 Funcionalidades

- Listado de películas
- Búsqueda por título
- Filtro por género
- Paginación
- Indicador de carga (`loading`)
- Arquitectura SPA sin recarga de página
- Estado centralizado simple

---

## 📂 Estructura del proyecto

```txt
.
├── index.html
├── js/
│   ├── main.js
│   ├── state.js
│   ├── elements.js
│   ├── listeners.js
│   └── render.js
│
├── services/
│   └── movie-service.js
