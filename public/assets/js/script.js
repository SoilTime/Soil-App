$(document).on("click", "#submit", (event) => {
    event.preventDefault();
    $("#vines").removeClass("hidden-svg");
    setTimeout(function () {
        $("#vines").addClass("hidden-svg");
    }, 8000);
})