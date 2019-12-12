const express = require('express');
const UserService = require('./services/UserService.js');
const LayoutService = require('./services/LayoutService.js');

const server = express();
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    res.redirect('/login');
})

server.get('/login', (req, res) => {
    const pageLayout = LayoutService.getLoginPageLayout();
    res.send(pageLayout);
});

server.get('/invalid-login', (req, res) => {
    const pageLayout = LayoutService.getLoginPageLayout(req.query.username, true)
    res.send(pageLayout);
})

server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isUserValid = UserService.getIsUserValid(username, password);
    if (isUserValid) {
        res.redirect(`/welcome?username=${username}`)
    } else {
        res.redirect(`/invalid-login?username=${username}`)
    }
});

server.get('/welcome', (req, res) => {
    const { username } = req.query;
    const name = UserService.getName(username);
    const pageLayout = LayoutService.getWelcomePageLayout(name);
    res.send(pageLayout);
});

server.listen(8280);
