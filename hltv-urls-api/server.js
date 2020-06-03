const http = require('http');
const port = process.env.PORT || 3000;

try {
    
    //instancio o app.js
    const app = require('./app');

    //criando um server e passando a aplicação
    const server = http.createServer(app);
    server.listen(port);

    console.log("API inicializada com sucesso!");

} catch (error) {
    console.log("Erro ao inicializar a API ", error);
}