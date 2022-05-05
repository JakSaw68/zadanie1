PAwCO - Zadanie 1
Jakub Sawiarski IIST 6.8

1. Program serwera
   - Wykorzystany został serwer Node.js. Program serwera zawarty jest w pliku server.js w repozytorium

2. Plik Dockerfile
   - Plik Dockerfile znajduje się w repozytorium

3. Polecenia dot. obrazu kontenera serwera
   - Zbudowanie obrazu kontenera
     - ```docker build -t zadanie1 .```
   - Uruchomienie kontenera o nazwie zadanie1_cont na porcie 3000
     - ```docker run -it -p 3000:3000 --name zadanie1_cont zadanie1```
   - Wyświetlenie informacji wygenerowanych przez serwer
     - ```docker logs zadanie1_cont```
   - Wyświetlenie info dot. warstw obrazu
     - ```docker history zadanie1```

4. Polecenia dot. kontenera multiplatformowego i przesłania na DockerHub
   - Instalacja pakietu platform
     - ```sudo apt-get install -y qemu-user-static```
   - Utworzenie i przygotowanie kontenera multiplatformowego
     - ```docker buildx create --name zad1builder```
     - ```docker buildx use zad1builder```
     - ```docker buildx inspect --bootstrap```
   - Wysłanie kontenera na DockerHub
     - ```docker buildx build -t jaksaw68/zadanie1:node --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .```
     - Link do kontenera Docker Hub znajduje się w pliku tekstowym na Moodle

Dodatek1:
 1. Wykorzystanie GitHub Actions
    - Do przesłania kontenera przez GitHub Actions utworzono i wykorzystano plik .github/workflows/main.yml
    - Eksport cache rejestru wykonano za pomocą linii cache-from/to z nazwą tagu kontenera 
    - Do przesłania i autoryzacji kontenera na GitHub Container Registry wygenerowano i użyto token PAT zapisanego w sekrecie repozytorium. Link do kontenera GHCR znajduje się w pliku tekstowym na Moodle



