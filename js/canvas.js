//Canvas.js
//ascagnel -- Andrew Scagnelli

/*
[11:51pm] ascagnel: you essentially set a timer to run on one (for server ticks)
[11:51pm] ascagnel: and the framerate to run unbounded
*/
var drawObject= null;
var paused= false;
var stop= false;
var tick= 0;
var inputKey= 0;
var prevTime= 0;
var down= [];
var up= [];
var keys= [];
var interval;

// development-only vars
var maxruns= 5;
var runs= 0;

function init() {
    msg('in init');
    $(document).keydown(function(event) {
        //msg('down: {' + event.keyCode + '}');
        down[length]= event.keyCode;
    });
    $(document).keyup(function(event) {
        //msg('up: {' + event.keyCode + '}');
        up[length]= event.keyCode;
    });

    drawObject = { "x": "0", "y": "0", "color": "blue"};
    paused= false;
    stop= false;
    tick= 50;
    msg(tick);
    prevTime= +new Date();

    interval= setInterval("loop()", 0);
    msg('interval: {'+interval+'}');
    //loop();
}

function loop() {
    if (!stop && !paused) {
        // draw ;
        var time= +new Date();
        if (time > (tick + prevTime)) {
            $('#time').html("time: " + time + ", prevTime: " + prevTime);
            readInput();
        //logic
        //etc
            prevTime= time;
        }
    } else if (pause) {
        pause();
    } else {
        return;
    }
    /*
    if (++runs >= maxruns) {
        window.clearInterval(interval);
    }
    */
}

function pause() {
    window.clearInterval(interval);
    msg('pause');
    return;
}

function readInput() {
    var i= 0;
    for (i= 0; i < down.length; i++)
        if (!$.inArray(down[i], keys)) {
            keys[length]= down[i];
            
            if (down[i] == 27)
                pause= true;
        }
            
    for (i= 0; i < up.length; i++)
        if ($.inArray(up[i], keys))
            keys.splice(keys.indexOf(up[i]), 1);
    
    var html= "";
    for(var i= 0; i < keys.length; i++) {
        if (keys[i] == '27')
            pause= true;
        html = html + "key true:&nbsp" + keys[i] + "<br />";
    }
    $('#keys').html(html);
}

function msg(text) {
    $('#msg').html(text);    
}
