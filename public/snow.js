$(document).ready( function() {

    $("canvas.snow").let_it_snow({
        windPower: -3,
        speed: 1,
        count: 500,
        size: 0,
        interaction: false
    });

    $("body").on("webcamSwipeLeft", function () {

    }).on("webcamSwipeRight", function () {

    });
});

window.initializeWebcamSwiper();
