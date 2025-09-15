## Base Project
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It includes a [`Design System (DS)`](https://github.com/techlottus/lottus-core-ui) as a Git submodule.

## 🚀 Getting Started

Clone the repository with submodules

```bash
git clone --recurse-submodules https://github.com/techlottus/base-project.git
cd base-project
```

If you already cloned without --recurse-submodules, run:

```bash
git submodule update --init --recursive
```

Install dependencies
```bash 
# Install base-project dependencies
npm install
# or
yarn install
```

```bash
# Install Design System dependencies
cd src/design-system
npm install
# or
yarn install
cd ../..
```


Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## 🏗️ Project Architecture
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
├── design-system/            # Submodule (Design System)
│
├── constants/                # Constantes generales
│   ├── endpoints.ts 
│   ├── routes.ts 
│   ├── urls.ts 
│   ├── ...etc
│
├── components/               # Componentes reutilizables
│   ├── ui/                   # Botones, inputs, modales, etc.
│   ├── layout/               # Header, Footer, Sidebar
│   ├── ...etc
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
├── .gitmodules               # Configuración del DS
├── middleware.ts             # Middleware para auth, redirects, etc.
└── eslint.config.js
└── next.config.js            # Configuración de Next.js
└── package-lock.json
└── package.json
└── postcss.config.mjs
└── tailwind.config.js
└── tsconfig.json

```

## 🛠️ Useful Commands

```bash
git submodule update --remote --merge
```

```bash
git submodule deinit -f src/design-system
git rm -f src/design-system
rm -rf .git/modules/src/design-system
git commit -m "chore: remove design-system submodule"
```