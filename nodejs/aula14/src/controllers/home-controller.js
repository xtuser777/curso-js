const Home = require('../models/Home');

Home.create({
    title: 'Teste',
    description: 'Testando'
}).catch(e => console.log(e));

exports.indexGet = (req, res) => {
    res.render('index');
};

exports.indexPost = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};