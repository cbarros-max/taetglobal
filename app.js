const express = require('express');
const path = require('path');
const app = express();

// Obtiene la ruta absoluta del proyecto sin depender de VSCode
const rootDir = process.cwd();

// Sirve los archivos estáticos desde /public
app.use(express.static(path.join(rootDir, 'public')));

// Página principal
app.get('/', (req, res) => {
  const indexPath = path.join(rootDir, 'views', 'index.html');
  console.log('🟢 Buscando archivo en:', indexPath);
  res.sendFile(indexPath);
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Servidor corriendo en http://localhost:${port}`));
