//Canvas.js
//ascagnel -- Andrew Scagnelli

/*
[11:51pm] ascagnel: you essentially set a timer to run on one (for server ticks)
[11:51pm] ascagnel: and the framerate to run unbounded
*/

function Main() {
    this.paused= false;
    this.tick= 0;
    this.inputKey= 0;
    this.prevTime= 0;
    this.keys= [];
    this.interval;
    this.keyManager;
    this.renderer;
    
    this.pause = function() {
        window.clearInterval(interval);
        $('#paused').html('paused');
        return;
    }
    
    this.init = function() {
        console.log("Debug level: " + debug);
        keyManager= new Keys();
        if (!keyManager.init(debug))
            return;
        
        $(window).keydown(function(event) {
            keyManager.addKey(event.keyCode);
        });
        console.log("Key down bound");
        
        $(window).keyup(function(event) { 
            keyManager.clearKey(event.keyCode);
        });
        console.log("Key up bound");
        
        renderer= new Canvas();
        if (!renderer.init())
            return;
    
        tick= 50;
        prevTime= +new Date();
    
        interval= setInterval("loop()", 0);
    }
    
    this.loop = function() {
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
    
    this.msg = function(text) {
        if (debug)
            $('#msg').html(text + "<br />" + $('#msg').html());    
    } 
}


