# Proyecto: Wanderlust Explorer (Next.js App Router + TypeScript + Tailwind)

## Reglas obligatorias
- Usa SOLO useState/useEffect nativos de React. PROHIBIDO Redux, Zustand, Context externo o librerías de estado.
- NO uses localStorage.
- Estructura: src/app (rutas), src/components, src/hooks, src/data, src/types.
- Rutas: / , /experiences , /experiences/[id] , /favorites , /profile
- Navegación del lado del cliente con next/link y next/navigation (nunca <a href> para rutas internas).
- Búsqueda y filtros (search, category, destination) viven en la URL como query params, usando useSearchParams, usePathname y useRouter. Los inputs deben prerrellenarse desde la URL al cargar.
- La búsqueda usa regex case-insensitive: new RegExp(term, 'i').test(title). Escapa caracteres especiales del término para evitar que la regex se rompa.
- Los componentes que usan hooks llevan "use client". useSearchParams debe estar dentro de <Suspense>.
- En Next 15+, params de las páginas dinámicas es una Promise (usa `use(params)` en client components o await en server components).
- Interface Experience en src/types/experience.ts, usada en todo el proyecto.
- useEffect siempre con array de dependencias correcto, sin bucles infinitos.
- Diseño responsive (móvil + escritorio), visualmente coherente entre páginas.
- Mensaje "No se encontraron resultados" cuando los filtros no devuelvan nada.
- Navbar visible en todas las páginas (en layout.tsx) con estilo de enlace activo usando usePathname.
- Commits pequeños y con mensajes convencionales (feat:, chore:, docs:).