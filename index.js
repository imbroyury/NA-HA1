const express = require('express');

const server = express();

server.get('/login', (req, res) => {
    console.log(req);
    console.log(res);
    res.send(`
        <input placeholder="username"></input>
        <input placeholder="password"></input>
    `);
});

server.post('/login', (req, res) => {
    console.log(req);
    console.log(res);
})

server.listen(8080);