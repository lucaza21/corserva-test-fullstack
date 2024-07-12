# Utilizar una imagen base de Node.js
FROM node:16-alpine

# Crear el directorio de la aplicación y asignar permisos
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app 

# Establecer el directorio de trabajo de la aplicación
WORKDIR /home/node/app

# Copiar los archivos de configuración y gestión de dependencias
COPY --chown=node:node package*.json ./

# Cambiar al usuario node para la instalación de dependencias locales
USER node

# Instalar las dependencias de la aplicación
RUN npm install

# Cambiar temporalmente al usuario root para instalar paquetes globales
USER root

# Instalar las dependencias globales para TypeScript y ts-node-dev
RUN npm install -g ts-node-dev typescript

# Volver al usuario node para ejecutar la aplicación
USER node

# Copiar el código de la aplicación
COPY --chown=node:node . .

# Exponer el puerto que usa la aplicación
EXPOSE 3030

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]
