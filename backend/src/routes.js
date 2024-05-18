const express = require('express');
const router = express.Router();

// Definición de las rutas
router.get('/', (req, res) => {
  res.send('API funcionando');
});

// Agrega más rutas según sea necesario
// Ejemplo: router.use('/productos', require('./productos'));

module.exports = router;
