$(document).ready( function() {

    // init let it snow
    $("canvas.snow").let_it_snow({
        windPower: -20,
        speed: 1,
        count: 250,
        size: 0,
        interaction: false
    });

    // on swipe left
    $("body").on("webcamSwipeLeft", function () {
        $("canvas.snow").trigger("letItSnow.set", ["windPower", -20]);
    // on swipe right
    }).on("webcamSwipeRight", function () {
        $("canvas.snow").trigger("letItSnow.set", ["windPower", 20]);
    });
});

// init the webcam swiper
window.initializeWebcamSwiper();
