var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/User');
var Reservation = require('../models/Reservation');

router.get('/', function(req, res, next) {
  res.send('General GET response. Nothing to see here.');
});

router.get('/user', function(req, res, next) {
    User.find({}, function (err, users) {
            if (err) throw err;

            // object of all the users
            res.send(users);
        });
});

router.get('/user/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if(err) throw err;
        res.send(user);
    });
});

router.post('/user', function(req, res, next) {
    if(req.body.firstName && req.body.lastName && req.body.email) {
        var user = new User(); 
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
    }
    else {
        res.status(400).send('Bad request.');
    }
    

    if(!user) {
        res.status(400).send('User was not captured!');
    }
    user.save(function (err) {
        if (err) throw err;
        res.send('User created!\n' + user);

        // get all the users
    });
});

router.put('/user/:id', function(req, res, next) {
    if(req.body.firstName && req.body.lastName && req.body.email) { 
        User.findById(req.params.id, function(err, user) {
            if(err) throw err;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.save(function (err) {
                if (err) throw err;
                res.send('User updated!\n' + user);
            });
        });
    }
    else {
        res.status(400).send('Bad request.');
    }
});

router.delete('/user/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
        if(err) throw err;
        user.remove(function(err) {
            if(err) throw err;
            res.send('User deleted!')
        });
    });
});

router.get('/reservation', function(req, res, next) {
    Reservation.find({}, function (err, reservations) {
            if (err) throw err;

            // object of all the users
            res.send(reservations);
        });
});

router.get('/reservation/:id', function(req, res, next) {
    Reservation.findById(req.params.id, function(err, reservation) {
        if(err) throw err;
        res.send(reservation);
    });
});

router.post('/reservation', function(req, res, next) {
    if(req.body.startDate && req.body.endDate && req.body.firstName && req.body.lastName && req.body.email) {
        var reservation = new Reservation(); 
        reservation.firstName = req.body.firstName;
        reservation.lastName = req.body.lastName;
        reservation.email = req.body.email;
        reservation.startDate = req.body.startDate;
        reservation.endDate = req.body.endDate;
    }
    else {
        res.status(400).send('Bad request.');
    }
    

    if(!reservation) {
        res.status(400).send('Reservation was not captured!');
    }
    reservation.save(function (err) {
        if (err) throw err;
        res.send('Reservation created!\n' + reservation);

    });
});

router.put('/reservation/:id', function(req, res, next) {
    if(req.body.startDate && req.body.endDate && req.body.firstName && req.body.lastName && req.body.email) { 
        Reservation.findById(req.params.id, function(err, reservation) {
            if(err) throw err;
            reservation.firstName = req.body.firstName;
            reservation.lastName = req.body.lastName;
            reservation.email = req.body.email;
            reservation.startDate = req.body.startDate;
            reservation.endDate = req.body.endDate;
            reservation.save(function (err) {
                if (err) throw err;
                res.send('Reservation updated!\n' + reservation);
            });
        });
    }
    else {
        res.status(400).send('Bad request.');
    }
});

router.delete('/reservation/:id', function(req, res, next) {
    Reservation.findById(req.params.id, function(err, reservation) {
        if(err) throw err;
        reservation.remove(function(err) {
            if(err) throw err;
            res.send('Reservation deleted!')
        });
    });
});

module.exports = router;
