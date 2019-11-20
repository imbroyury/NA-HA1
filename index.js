const express = require('express');
const UserService = require('./services/UserService.js');
const LayoutService = require('./services/LayoutService.js');

const server = express();

server.get('/', (req, res) => {
    res.redirect('/login');
})

server.get('/login', (req, res) => {
    const { username, password } = req.query;
    const areCredentialsProvided = !!username && !!password;
    
    // send empty login page if no credentials in query
    if (!areCredentialsProvided) {
        const pageLayout = LayoutService.getLoginPageLayout();
        return res.send(pageLayout);
    }
    // if both username and password provided in query, try to validate
    const isUserValid = UserService.getIsUserValid(username, password);
    if (isUserValid) {
        res.redirect(`/welcome?username=${username}`)
    } else {
        const pageLayout = LayoutService.getLoginPageLayout(username, true)
        res.send(pageLayout);
    }
});

server.get('/welcome', (req, res) => {
    const { username } = req.query;
    const name = UserService.getName(username);
    const pageLayout = LayoutService.getWelcomePageLayout(name);
    res.send(pageLayout);
})

server.listen(8280);
