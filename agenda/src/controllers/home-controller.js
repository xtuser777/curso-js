const Home = require('../models/Home');

exports.indexGet = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.indexPost = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};