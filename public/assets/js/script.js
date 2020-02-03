var plantName = $("").val().trim()


// Making ajax call to the trefle api route to get the  plant info and adding on click event listener
$(document).on("click", "#searchbtn", function(event){
$.ajax({
    url: "/trefle" + plantName,
    method: "GET"
}).then(function(res){
    console.log(res)
});

// Make ajax request to get information from the database
    $.ajax({
        url: "",
        method: "GET",
    })
});

