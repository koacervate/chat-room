var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var currUser = req.session.username;
    var renderData = {
        title: 'chatter',
        loginMessage: 'Logged in as ',
        loggedIn: currUser
    }
    if (currUser === undefined) {
        renderData.loginMessage = 'Please set a username.';
    }
    res.render('index', renderData);
});

router.post('/login', function(req, res, next) {
    req.session.username = req.body.username;
    console.log(req.session);
    res.end('done');
});

router.get('/login', function(req, res, next) {
    res.send(req.session.username);
});

router.get('/about', function(req, res, next) {
    res.render('about', {title: 'chatter'});
});

module.exports = router;

