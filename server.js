const http = require('http');
// Pakiet do wyznaczania strefy czasowej
const momentTimezone = require('moment-timezone');

// Ustawienie nasłuchiwanego portu
const port = 3000;
var timezone = '';
var ip = '';

// Pozyskanie adresu IP i strefy czasowej klienta
http.get({ host: 'ip-api.com', path: '/json'}, function(response) {
    response.on('data', function(d) {
        data = JSON.parse(d)
        ip = data.query
        timezone = data.timezone
    });
});

// Utworzenie serwera HTTP i strony wyświetlającej IP, strefę czasową i czas u klienta
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(
        "<html><body>Adres IP klienta: " + ip +
        "<br />Strefa czasowa klienta: " + timezone +
        "<br />Data i godzina: " +
        momentTimezone().tz(timezone).format('DD.MM.YYYY HH:mm:ss') +
        "</body></html>"
    );
})

// Nasłuchiwanie serwera
server.listen(port, () => {
    let date_curr = new Date();
    let date = ("0" + date_curr.getDate()).slice(-2);
    let month = ("0" + (date_curr.getMonth() + 1)).slice(-2);
    let year = date_curr.getFullYear();
    let hours = ("0" + date_curr.getHours()).slice(-2)
    let minutes = ("0" + date_curr.getMinutes()).slice(-2)
    let seconds = ("0" + date_curr.getSeconds()).slice(-2)

    // Wysłanie informacji o serwerze do logów
    console.log("Zadanie 1 - Serwer Node");
    console.log("Data uruchomienia: " + year + "-" + month +
        "-" + date + " " + hours + ":" + minutes + ":" + seconds);
    console.log("Imie i Nazwisko autora: Jakub Sawiarski");
    console.log(`Serwer nasłuchuje na porcie: ${port}`);
})