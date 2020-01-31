var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function (router) {
    router.get('/', function (req, res) {
        // console.log(db.Student);
        db.Student.findAll({}).then(data => {
            // console.log("data", data[0].dataValues);
            res.render('', {});
        })
    });

   

    router.post("/", function (req, res) {
        console.log(req.body);

        db.Student.create(req.body) //{name:'jkska'}
            .then(function (data) {
                console.log("added in database");
                res.json(data)
            })
    });

}
