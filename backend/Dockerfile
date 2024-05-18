# Usamos la imagen oficial de Node.js como base
FROM node:14

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de dependencias del proyecto y los instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Exponemos el puerto en el que se ejecutará el servidor
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
