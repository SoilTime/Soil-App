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
    // router.post("/api/:search", function (req, res) {
    //     console.log(req.body);

    //     db.Student.create(req.body)
    //         .then(function (data) {
    //             // console.log("added in database");
    //             res.json(data)
    //         })
    // });
router.post("/api/coordinates", function(req,res){
    var latMin = req.body.lat - 1;
    var latMax = parseFloat(req.body.lat) + 1;
    var lngMax = parseFloat(req.body.lng) + 1;
    var lngMin = req.body.lng -1;
    console.log(latMin);
    console.log(latMax);
    console.log(lngMax);
    console.log(lngMin)
    db.Soil.findAll({
        where: {
            Region: "North Carolina"
        }
    }).then(function(result){
        res.json(result)
        console.log(result[0])
        var queryTerm = result[0].Species
        queryTerm2 = queryTerm.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
        for (i = 0; i < queryTerm2.length; i++) {
            if (queryTerm2[i] == " ") {
                // console.log(queryTerm2.replace(/ /g, '%20'));
            }
            // console.log(queryTerm2);
            var queryTerm3 = queryTerm2.replace(/ /g, '%20')
        }
        // console.log(queryTerm3)
        axios.get("https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&format=json&exintro=&titles=" + queryTerm3 + "&piprop=original&format=json")
        .then(function(res){
            console.log(res.data.query)
        })
    })
})
    
}



// router.get('/trefle/:plant', function (req, res) {
//     var trefURLKey = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
//     // var plant = "spinach"
//     axios
//     .get(`https://trefle.io/api/plants?q=${req.params.plant}&token=${trefURLKey}`)
//     .then(function(res) {
//         console.log(res.data)
//     })

//     res.render('soil', {plant: data});
//     });
    

// module.exports = router;

