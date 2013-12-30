$(document).ready( function() {

    // init let it snow
    $("canvas.snow").let_it_snow({
        windPower: 0,
        speed: 1,
        count: 300,
        size: 0,
        interaction: false
    });

    // on swipe left
    $("body").on("webcamSwipeLeft", function () {
        $("canvas.snow").trigger("letItSnow.set", ["windPower", -25]);
    // on swipe right
    }).on("webcamSwipeRight", function () {
        $("canvas.snow").trigger("letItSnow.set", ["windPower", 25]);
    });
});

// init the webcam swiper
window.initializeWebcamSwiper();
