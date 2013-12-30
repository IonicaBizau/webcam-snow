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
