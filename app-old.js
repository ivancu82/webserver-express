
const http = require('http');

// Crear el servidor
http.createServer(( req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});

        let salida = {
            nombre: 'Pepito',
            edad: 33,
            url: req.url
        };

        res.write( JSON.stringify( salida ));
        //res.write('Hola a todos');
        res.end();
    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');
