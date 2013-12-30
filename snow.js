$(document).ready( function() {

    var windPower = 0;

    // init let it snow
    $("canvas.snow").let_it_snow({
        windPower: windPower,
        speed: 1,
        count: 300,
        size: 0,
        interaction: false
    });

    var step = 25;

    var lastWasRight;

    // on swipe left
    $("body").on("webcamSwipeLeft", function () {

        if (lastWasRight) {
            windPower = -step;
            lastWasRight = false;
        } else {
            windPower -= step;
        }

        $("canvas.snow").trigger("letItSnow.set", ["windPower", windPower]);
    // on swipe right
    }).on("webcamSwipeRight", function () {

        if (!lastWasRight) {
            windPower = step;
            lastWasRight = true;
        } else {
            windPower += step;
        }

        $("canvas.snow").trigger("letItSnow.set", ["windPower", windPower]);
    });

    var $info = $(".info");
    var isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
    if (!navigator.getUserMedia || !isChrome) {
       $info.html("Unfortunately, this is <strong>not</strong> supported in your browser... <i class='fa fa-meh-o'></i> Please reopen the page in a recent version of <strong>Chrome browser</strong>."); 
    } else {
       $info.html("Move your right hand in the front of the webcam to change the direction of the snow.");
    }
});

// init the webcam swiper
window.initializeWebcamSwiper();
