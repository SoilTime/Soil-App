var express = require("express");
var router = express.Router();
var db = require("");

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('index', {});
        // db.Student.findAll({}).then(data => {
        // })
    });

   

    router.post("/:search", function (req, res) {
        console.log(req.body);

        db.Student.create(req.body)
            .then(function (data) {
                console.log("added in database");
                res.json(data)
            })
    });

}
