This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Arquitectura del proyecto

```bash
src/
│
├── app/                      # App Router (rutas, layouts, páginas)
│   ├── layout.tsx            # Layout raíz (Header, Footer, estilos globales)
│   ├── page.tsx              # Página principal
│   ├── dashboard/
│   │   ├── components/       # Componentes específicos del dashboard
│   │   │   ├── StatsCard.tsx # Componente perteneciente al dashboard
│   │   │   └── UserTable.tsx # Componente perteneciente al dashboard
│   │   ├── layout.tsx        # Layout específico para dashboard
│   │   ├── page.tsx          # Página inicial del dashboard
│   │   ├── settings/
│   │   │   ├── page.tsx      # Página /dashboard/settings
│   │   │   └── loading.tsx   # Componente de loading para esa ruta
│   │   └── loading.tsx
│   ├── not-found.tsx         # Página 404 personalizada
│   └── error.tsx             # Página de error global
│
├── constants/                # Constantes generales
│   ├── endpoints.ts 
│   ├── routes.ts 
│   ├── urls.ts 
│
├── components/               # Componentes reutilizables
│   ├── ui/                   # Botones, inputs, modales, etc.
│   ├── layout/               # Header, Footer, Sidebar
│
├── hooks/                    # Custom Hooks (useAuth, useFetch, etc.)
│   ├── services/             # Hooks para llamadas a servicios externos
│
├── lib/                      # Funciones utilitarias y helpers
│   ├── api-client.ts         # Cliente fetch/axios centralizado
│   ├── auth.ts               # Lógica de autenticación
│   └── validators.ts         # Validaciones
│
├── services/                 # Integraciones externas (API, DB, Stripe, etc.)
│   ├── userService.ts
│   └── productService.ts
│
├── store/                    # Estado global (Redux, Zustand, etc.)
│
├── styles/                   # Estilos globales, Tailwind config, CSS modules
│
├── types/                    # Tipos TypeScript compartidos
│
├── middleware.ts             # Middleware para auth, redirects, etc.
└── next.config.js            # Configuración de Next.js
```