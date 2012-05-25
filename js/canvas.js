//Canvas.js
//ascagnel -- Andrew Scagnelli

/*
[11:51pm] ascagnel: you essentially set a timer to run on one (for server ticks)
[11:51pm] ascagnel: and the framerate to run unbounded
*/
var drawObject= null;
var paused= false;
var tick= 0;
var inputKey= 0;
var prevTime= 0;
var keys= [];
var interval;
var keyManager;


function pause() {
    window.clearInterval(interval);
    $('#paused').html('paused');
    return;
}

function init() {
    console.log("Debug level: " + debug);
    keyManager= new Keys();
    keyManager.init(debug);
    
    $(window).keydown(function(event) {
        keyManager.addKey(event.keyCode);
    });
    console.log("Key down bound");
    
    $(window).keyup(function(event) { 
        keyManager.clearKey(event.keyCode);
    });
    console.log("Key up bound");

    drawObject = { "x": "0", "y": "0", "color": "blue"};
    tick= 50;
    prevTime= +new Date();

    interval= setInterval("loop()", 0);
}

function loop() {
    if (paused) {
        pause();
        return;
    }
    
    // draw ;
    var time= +new Date();
    if (time > (tick + prevTime)) {
        prevTime= time;
        if (debug) {
            $('#time').html("time: " + time + ", prevTime: " + prevTime);
        }
        keyManager.process();
    }
}

function msg(text) {
    if (debug)
        $('#msg').html(text + "<br />" + $('#msg').html());    
}
