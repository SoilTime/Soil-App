

$(document).ready(function () {

    $("#map").hide();
    display_last_searched();
    $("#submit").on("click", coordinateAddress);
    $(document).on("click", ".submit_side", side_coordinate);



    function side_coordinate() {
        display_last_searched();
        geocoder = new google.maps.Geocoder();
        // console.log($(this).data("value"));

        var address = $(this).data("value");
        // console.log("codeAddress -->" + address);
        // console.log($(this).data("lat"));
        var obj = { lat: parseFloat($(this).data("lat")), lng: parseFloat($(this).data("lng")), name: address };
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                // var obj = { lat: parseFloat($(this).data("lat")), lng: parseFloat($(this).data("lng")), name: address };
                // saveData(obj);
                // console.log(obj);
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

    function coordinateAddress() {
        display_last_searched();
        geocoder = new google.maps.Geocoder();
        var city = $("#city-search").val();
        var address = city.charAt(0).toUpperCase() + city.slice(1);
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                // console.log(window);
                var lat_new = results[0].geometry.location.lat().toFixed(2);
                var lng_new = results[0].geometry.location.lng().toFixed(2);
                var obj = { lat: parseFloat(lat_new), lng: parseFloat(lng_new), name: address };
                saveData(obj);
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
        var city = obj.name;

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
    /////////////////////////////////////////////////////////////

    function saveData(item) {
        var array1 = window.localStorage.getItem("city_history1");

        if (array1 == null) {
            array1 = [item];
        } else {
            array1 = JSON.parse(array1);
            if (array1.indexOf(item) === -1) {
                array1.push(item);
            }
        }
        window.localStorage.setItem("city_history1", JSON.stringify(array1));
    }

    function display_last_searched() {
        var array_history = JSON.parse(window.localStorage.getItem("city_history1"));
        if (array_history === null) {
            return;
        }
        $('sidebar').empty();
        console.log(array_history.length);
        for (var i = 0; i < array_history.length; i++) {
            var newElement = $("<button>").attr("class", "submit_side");
            newElement.text(array_history[i].name);
            newElement.attr("data-value", array_history[i].name)
            newElement.attr("data-lat", array_history[i].lat);
            newElement.attr("data-lng", array_history[i].lng);
            // newElement.attr("data-side", "yes");
            $('sidebar').append(newElement);
        }

    }
    /////////////////////////////////////////////////////////////////
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

    $(".submit_side").on("click", showCards)
    function showCards() {
        $("#soil").css("visibility", "visible");
        $("#plant-pic").css("visibility", "visible");
        $("#plant-info").css("visibility", "visible")
    }
})
