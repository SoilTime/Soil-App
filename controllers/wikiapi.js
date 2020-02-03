var axios = require("axios");
const address = "test"

// require("../public/assets/js/script")

var loginUrl = "https://www.mediawiki.org/w/api.php?action=login&lgname=Jsegel12@Project1&lgpassword=n8mqe7fg3ql50genu5iaskushljgicjf&lgtoken=123ABC";
 axios
    .get(loginUrl)
    .then(function(res){
        console.log(res)
    })    

    var queryTerm = address;
    queryTerm = queryTerm.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    for (i = 0; i < queryTerm.length; i++) {
        if (queryTerm[i] == " ") {
            console.log(queryTerm.replace(/ /g, '%20'));
        }
        console.log(queryTerm);
        var var3 = queryTerm.replace(/ /g, '%20')
    }
    console.log(var3);

    // module.exports = var3