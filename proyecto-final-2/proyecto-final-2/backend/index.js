const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de conexión a MongoDB
const mongoDBURI = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // 30 segundos
})
.then(() => {
  console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
  console.error('Error al conectar a MongoDB:', error);
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

mongoose.connection.once('open', () => {
  console.log('Conexión a MongoDB establecida.');
});

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use('/api', productRoutes);
app.use('/api', userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
