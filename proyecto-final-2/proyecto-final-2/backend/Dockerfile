FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Copia el script seed.js al contenedor
COPY seed.js ./

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
