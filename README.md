# Wanderlust Explorer

Explorador de experiencias de viaje construido con **Next.js (App Router)**, **React**, **TypeScript** y **Tailwind CSS**. Permite buscar, filtrar y marcar como favoritas 100 experiencias de todo el mundo, con búsqueda y filtros compartibles por URL.

## Tecnologías

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para generar la versión de producción:

```bash
npm run build
```

## Funcionalidades

- 5 rutas con navegación del lado del cliente: `/`, `/experiences`, `/experiences/[id]`, `/favorites` y `/profile`.
- Búsqueda por título con regex case-insensitive (el término se escapa para evitar errores).
- Filtros por categoría y destino, independientes y combinables con la búsqueda.
- Búsqueda y filtros sincronizados con la URL. Ejemplo: `/experiences?search=vela&category=adventure&destination=Croatia`. Al cargar, los campos salen rellenos y la lista ya filtrada.
- Favoritos con `useState` pasados por props.
- Custom hooks `useFilters` y `useExperiences`.
- Mensaje "No se encontraron resultados" cuando no hay coincidencias.
- Diseño responsive.
- Sin librerías de estado ni `localStorage`.

## Estructura de carpetas

```
src/
├── app/               # Rutas (App Router)
├── components/        # Navbar, AppShell, ExperienceCard, SearchBar, FilterBar
│   └── views/         # Vistas de cada página
├── hooks/             # useFilters, useExperiences
├── data/              # Dataset de 100 experiencias
└── types/             # Interface Experience
```

## Decisiones de arquitectura

`AppShell` guarda el `useState` de favoritos y renderiza la vista según `usePathname`. Esto se hace porque las páginas que llegan como `children` en el App Router no pueden recibir props. Así, los favoritos se pasan por props a cada vista sin usar Context ni librerías externas.

## Design References

- **Airbnb Experiences** (https://www.airbnb.com/s/experiences): tarjetas con foto grande, rating, precio y botón de favoritos. Aplicado en `ExperienceCard`.
- **GetYourGuide** (https://www.getyourguide.com): filtros para elegir categoría y destino. Aplicado en `FilterBar`.
- **Viator** (https://www.viator.com): listado de tours. Aplicado en la cuadrícula de `ExperiencesView`.

Las imágenes del dataset son placeholders de picsum.photos.

## Limitaciones

Los favoritos se guardan solo en el estado de React, por lo que se pierden al recargar la página (el reto no pide persistencia).