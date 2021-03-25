# Pega imagem
FROM cypress/base:10

# Copia packages e instala
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install --save-dev cypress-downloadfile
RUN npm install -D cypress

# Copia o resto
COPY . .
CMD ["npx","cypress", "run"]