#!/bin/bash
set -e

# Cambiar URL del submódulo si hay token (solo en Vercel / CI)
if [ -n "$DS_SUBMODULE_TOKEN" ]; then
  echo "🔐 Usando token para submódulo..."
  git submodule set-url src/design-system https://x-access-token:${DS_SUBMODULE_TOKEN}@github.com/techlottus/lottus-core-ui.git
else
  echo "⚠️ No se detectó token, usando URL por defecto..."
fi

git submodule sync

# Inicializar y actualizar submódulo usando la rama definida en .gitmodules (develop)
git submodule update --init --remote --recursive

# Forzar checkout a develop 
echo "apuntar a 'develop'..."
git -C src/design-system fetch origin develop
git -C src/design-system checkout develop
git -C src/design-system pull origin develop

# Instalar dependencias dentro del submódulo
npm install --prefix src/design-system