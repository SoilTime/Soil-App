var express = require("express");
var router = express.Router();
var db = require("../models");
var axios = require("axios")


module.exports = function (router) {
    // Home route to render the index html file
    router.get('/', function (req, res) {
        res.render('index', {});
    });
// Route to render the result page after search
    router.get('/soil', function (req, res) {
        db.Soil.findAll({
            where: {
               
            }
        })
        res.render('soil', {soil: data});
    });

   
// Route to capture the search input by user
    router.post("/api/:search", function (req, res) {
        console.log(req.body);

        db.Student.create(req.body)
            .then(function (data) {
                // console.log("added in database");
                res.json(data)
            })
    });

}



router.get('/trefle/:plant', function (req, res) {
    var trefURLKey = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
    // var plant = "spinach"
    axios
    .get(`https://trefle.io/api/plants?q=${req.params.plant}&token=${trefURLKey}`)
    .then(function(res) {
        console.log(res.data)
    })

    res.render('soil', {plant: data});
    });
    
    
