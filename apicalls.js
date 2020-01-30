var axios = require("axios")

var trefURL = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
var plant = "175920"

// https://trefle.io/api/plants?q=rosemary&token=VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09
function trefleCall (){
    axios
    .get(`https://trefle.io/api/plants?q=${plant}&token=${trefURL}`)
    .then(function(res) {
        //   const data = res.data
        console.log(res)
        // console.log(res.images)
    })
}
trefleCall()