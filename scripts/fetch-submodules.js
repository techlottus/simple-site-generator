const { execSync } = require('child_process');

const token = process.env.DS_SUBMODULE_TOKEN;
if (!token) {
  console.error('DS_SUBMODULE_TOKEN no está definido');
  process.exit(1);
}

// Actualiza la URL del submodule con el token
execSync(`git submodule set-url src/design-system https://x-access-token:${token}@github.com/techlottus/lottus-core-ui.git`);
execSync('git submodule sync');
execSync('git submodule update --init --recursive');
execSync('npm install --prefix src/design-system', { stdio: 'inherit' });