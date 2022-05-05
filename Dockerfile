# Serwer Node Alpine
FROM node:alpine

# Etykieta z imieniem autora
LABEL "name" = "Jakub Sawiarski"

# Katalog roboczy
WORKDIR '/server'

# Instalacja modułu moment-timezone
RUN npm init -y && \
npm install moment-timezone --save

# Kopiowanie pliku server.js do obrazu
COPY server.js .

# Nasłuchiwanie portu 3000
EXPOSE 3000

# Podanie pliku, z którego uruchomiony zostanie serwer
ENTRYPOINT [ "node" ]
CMD [ "server.js" ]