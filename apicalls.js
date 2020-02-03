var axios = require("axios")

var trefURLKey = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
var plant = "spinach"

// https://trefle.io/api/plants?q=rosemary&token=VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09


function trefleCall (){
    axios
    .get(`https://trefle.io/api/plants?q=${plant}&token=${trefURLKey}`)
    .then(function(res) {
        //   const data = res.data
        // console.log(res)
        // https://trefle.io/api/plants/id?token=${trefURL}

        console.log(res.data)


})
// console.log("hello",useImage)

}
trefleCall()