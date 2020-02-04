
//paste functional data

// Making ajax call to the trefle api route to get the  plant info and adding on click event listener
$(document).ready(function () {

    $("#map").hide();
    $("#submit").on("click", coordinateAddress);

    function coordinateAddress() {
        // console.log("working");
        geocoder = new google.maps.Geocoder();
        var address = $("#city-search").val();
        console.log("codeAddress -->" + address);
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat_new = results[0].geometry.location.lat().toFixed(2);
                var lng_new = results[0].geometry.location.lng().toFixed(2);
                var obj = { lat: parseFloat(lat_new), lng: parseFloat(lng_new) };
                // $("#lat").text(obj.lat);
                // $("#lng").text(obj.lng);
                console.log(obj);
                initMap(obj);
                sendCoord(obj)
            }
            else {
                // Get the modal
                var modal = document.getElementById("myModal");

                // Get the button that opens the modal
                var btn = document.getElementById("myBtn");

                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }

                // alert("Geocode was not successful for the following reason: " + status);
            }
        });
    }

    function initMap(obj) {
        $("#map").show();
        // console.log(obj);
        var map;
        var city = $("#city-search").val();

        var geocoder = new google.maps.Geocoder();
        map = new google.maps.Map($("#map")[0], {
            center: { lat: obj.lat, lng: obj.lon },
            zoom: 8
        });

        geocoder.geocode({ 'address': city }, function (results, status) {
            // console.log(city);
            // console.log(results);
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });

        var marker = new google.maps.Marker({ position: obj, map: map, draggable: true });
        console.log(obj);

        google.maps.event.addListener(
            marker,
            'dragend',
            function () {
                // Dynamically show it somewhere if needed
                // $("#lat").text(marker.position.lat().toFixed(6));
                // $("#lng").text(marker.position.lng().toFixed(6));

                obj.lat = parseFloat(marker.position.lat().toFixed(2));
                obj.lng = parseFloat(marker.position.lng().toFixed(2));
                // $("#lat").text(obj.lat);
                // $("#lng").text(obj.lng);
                console.log(obj);

            }
        );
    };
    function sendCoord(data) {
        $.ajax({
            url: "#",
            method: "GET",
            data: data
        }).then(function (response) {
            console.log("SENT TO DATABASE")
            console.log(data)
        })
    };
    $("#submit").on("click", showCards)
    function showCards() {
        $("#soil").css("visibility", "visible");
        $("#plant-pic").css("visibility", "visible");
        $("#plant-info").css("visibility", "visible")
    }


})
