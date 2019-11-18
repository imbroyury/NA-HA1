const credentials = require('../secure-credentials.json');

const getIsUserValid = (username, password) => {
    const user = credentials.find((user) => user.username === username && user.password === password);
    return !!user;
};

const getName = (username) => {
    const user = credentials.find((user) => user.username === username);
    return user ? user.name : null;
};

module.exports = {
    getIsUserValid,
    getName,
};
