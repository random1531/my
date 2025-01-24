# Utiliser une image Node.js pour la construction
FROM node:18-alpine AS builder

# Installer les dépendances nécessaires
RUN apk add --no-cache openssl

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

# Utiliser une image plus légère pour l'étape finale
FROM node:18-alpine

# Installer les dépendances nécessaires
RUN apk add --no-cache bash openssl

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis l'étape de build
COPY --from=builder /app /app

# Copier le script wait-for-it.sh dans l'image
COPY wait-for-it.sh /app/wait-for-it.sh

# Donner les permissions d'exécution au script
RUN chmod +x /app/wait-for-it.sh

# Exposer le port backend
EXPOSE 3500

# Commande par défaut
CMD ["npm", "start"]
