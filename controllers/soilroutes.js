var express = require("express");
var router = express.Router();
var db = require("../models");
var axios = require("axios")


module.exports = function () {
    // Home route to render the index html file
    router.get('/', function (req, res) {
        res.render('index', {});
    });
// Route to render the result page after search
    router.get('/', function (req, res) {
        res.render('soil', {soil: data});
    });

   
// Route to capture the search input by user
    router.post("/:search", function (req, res) {
        console.log(req.body);

        db.Student.create(req.body)
            .then(function (data) {
                console.log("added in database");
                res.json(data)
            })
    });

}



router.get('/trefle', function (req, res) {
    var trefURLKey = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
    var plant = "spinach"
    axios
    .get(`https://trefle.io/api/plants?q=${plant}&token=${trefURLKey}`)
    .then(function(res) {
        
        
        console.log(res.data)
        
        
    })
    
    res.render('soil', {plant: data});
    });
    
    
