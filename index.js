const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((request, response) => {

    let path = url.parse(request.url).pathname;

    if (path == "" || path == "/") {
        path = '/index.html'
    }
    let fileName = '.' + path; //serve para especificar onde esta o diretorio, caso aconteca um erro é aqui!

    fs.readFile(fileName, (err, data) => {

        if (err) {
            response.writeHead(404, { 'const-type': "text/html ; meta charset = UTF-8" })
            response.end('<h1> página Não encontrada </h1>')
        } else {
            response.writeHead(200, { 'content-type': 'text/html' })
            response.write(data)
            response.end();
        }
    })


}).listen(3000, (err) => {

    if (err) {
        console.log(err)
    } else {
        console.log("servidor rodando na porta 3000");
    }
})