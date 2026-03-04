const sayHello = (req, res) => {
    res.send('Hello');
};

const displayMyName = (req, res) => {
    res.send('Lacey Sanabria');
};

module.exports = {
    sayHello,
    displayMyName
};