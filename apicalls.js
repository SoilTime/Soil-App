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
const  useImage = []
        for (let i = 0; i < res.data.length; i++) {
            axios.get(`https://trefle.io/api/plants/${res.data[i].id}?token=${trefURLKey}`)
            .then(function(result){
                let images = result.data.images
                // console.log(images)
                if(images.length !== 0){
                    useImage.push(images[0]);
                         return useImage;
                        // console.log("hello",useImage);

                }
                else{
                    console.log("empty");
                    
                }
                
        
        // for (let j = 0; j < images.length; j++) {
        //     // console.log(images[j])
        //     if(images[j] !== null)  {
        //      useImage.push(images[j]);
        //      return useImage;
        //     }
        //     else{return "Coming soon"}
        // }
    }).then(function(arr){
        console.log("hello",arr);
        
    })

}
// console.log(useImage);

})
// console.log("hello",useImage)

}
trefleCall()