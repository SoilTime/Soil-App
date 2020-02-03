var loginUrl = "https://www.mediawiki.org/w/api.php?action=login&lgname=Jsegel12@Project1&lgpassword=n8mqe7fg3ql50genu5iaskushljgicjf&lgtoken=123ABC";
    $.ajax({
        url: loginUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

    var var2 = queryTerm;
    var2 = var2.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

    for (i = 0; i < city2.length; i++) {
        if (city2[i] == " ") {
            console.log(city2.replace(/ /g, '%20'));
        }
        console.log(city2);
        var city3 = city2.replace(/ /g, '%20')
    }
    console.log(city3);