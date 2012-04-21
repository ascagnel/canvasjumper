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


function pause() {
    window.clearInterval(interval);
    $('#paused').html('paused');
    return;
}

function readInput() {
    var html= "keys length: " + keys.length + "<br />";
    for(var i= 0; i < keys.length; i++) {
        if (keys[i] == '80')
            pause= true;
        html = html + "key true:&nbsp" + keys[i] + "<br />";
    }
    if (debug)
        $('#keys').html(html);
}

function init() {
    $(window).keydown(function(event) {
        if ($.inArray(event.keyCode, keys) == -1)
            keys[keys.length]= event.keyCode;
    });
    
    $(window).keyup(function(event) {;
        var index= $.inArray(event.keyCode, keys);
        if (index != -1)
            keys.splice(index, 1);
        else
            keys= [];
    });

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
        readInput();
    }
}

function msg(text) {
    if (debug)
        $('#msg').html(text + "<br />" + $('#msg').html());    
}
