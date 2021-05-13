const http = require('http');


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end("welcome to home page")

    }

    if (req.url === '/about') {
        res.end("i am new to node")

    }


    res.end(`<h1>Opps</h1> <a href="/">home</a>`)


})


server.listen(57730);