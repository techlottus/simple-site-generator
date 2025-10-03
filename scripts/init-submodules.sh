#!/bin/bash
set -e

# Reemplazar la URL del submódulo para usar el token directamente
git submodule set-url src/design-system https://x-access-token:${DS_SUBMODULE_TOKEN}@github.com/techlottus/lottus-core-ui.git

# Inicializar y actualizar submódulos
git submodule sync
git submodule update --init --recursive

# Instalar dependencias del submódulo
npm install --prefix src/design-system