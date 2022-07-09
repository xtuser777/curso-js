const Home = require('../models/Home');

class HomeController {
    constructor() {
        this.home = new Home();
    }

    index(req, res) {
        return res.render('home/index', { title: 'Home - Index' });
    }
}

module.exports = HomeController;