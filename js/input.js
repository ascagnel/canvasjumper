// Input handling stuff

function Keys() {
    this.left= 37;
    this.right= 39;
    this.up= 38;
    this.down= 40;
    
    this.jump= 32;
    
    this.pause= 80;
    
    this.pressedKeys= [];
    
    this.debug= false;

    this.process = function() {        
        var html= "keys length: " + this.pressedKeys.length + "<br />";
        for(var i= 0; i < this.pressedKeys.length; i++) {
            html = html + "key "+i+" :&nbsp" + this.pressedKeys[i] + "<br />";
        }
        
        if (this.debug) {
            $('#keys').html(html);
        }
        
        return this.pressedKeys;
    }

    this.addKey = function(keyCode) {
        if (this.pressedKeys.indexOf(keyCode) == -1)
            this.pressedKeys[this.pressedKeys.length]= keyCode;
    }

    this.clearKey = function(keyCode) {
        var index= $.inArray(keyCode, this.pressedKeys);
        if (index != -1)
            this.pressedKeys.splice(index, 1);
        else
            this.pressedKeys= [];
    }
    
    this.init= function (debug) {
        this.debug= debug;
        return true;
    }
}
