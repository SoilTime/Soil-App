var axios = require("axios")

var trefURLKey = "VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09"
var plant = "spinach"

// https://trefle.io/api/plants?q=rosemary&token=VjlQT2w5L3puRTRJY1JJZ3BETEpPUT09


var counter = 0;
function trefleCall (){
    axios
    .get(`https://trefle.io/api/plants?q=${plant}&token=${trefURLKey}`)
    .then(function(res) {
          
          
          if(res.data.length > counter){
            const id = res.data[counter].id;
            console.log(id);
            console.log(res.data.length);
              secondTrefleCall(id);
              counter++;
              trefleCall();
          }
          
        // console.log(res)
        // https://trefle.io/api/plants/id?token=${trefURL}
    
// console.log(useImage);

})
// console.log("hello",useImage)

}
trefleCall()

const  useImage = []

function secondTrefleCall(id){
    axios.get(`https://trefle.io/api/plants/${id}?token=${trefURLKey}`)
    .then(function(result){
        let images = result.data.images
        // console.log(images)
        if(images.length !== 0){
            useImage.push(images[0]);
                //  return useImage;
                console.log("hello",useImage);
            }
            else{
                console.log("empty");
                
            }
        })
}