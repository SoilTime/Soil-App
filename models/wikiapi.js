var axios = require("axios");

var loginUrl = "https://www.mediawiki.org/w/api.php?action=login&lgname=Jsegel12@Project1&lgpassword=n8mqe7fg3ql50genu5iaskushljgicjf&lgtoken=123ABC";
 axios
    .get(loginUrl)
    .then(function(res){
        console.log(res)
    })    

    var var2 = queryTerm;
    var2 = var2.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    for (i = 0; i < var2.length; i++) {
        if (var2[i] == " ") {
            console.log(var2.replace(/ /g, '%20'));
        }
        console.log(var2);
        var var3 = var2.replace(/ /g, '%20')
    }
    console.log(city3);