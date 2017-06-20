var express = require('express');
var router = express.Router();

var School = require('../models/school');

router.get('/', function (req, res, next) {
    School.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

module.exports = router;
