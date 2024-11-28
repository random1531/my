# Utiliser une image Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Générer les fichiers Prisma client
RUN npx prisma generate

# Exposer le port backend
EXPOSE 3500

# Commande de démarrage
CMD ["npm", "start"]
