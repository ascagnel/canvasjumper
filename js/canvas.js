function Canvas () {
    this.canvas= null;
    
    this.init = function () {
        var canvas = document.getElementById("canvas");  
        var ctx = canvas.getContext("2d");  
        
        this.canvas= ctx;
        
        this.canvas.beginPath();
        this.canvas.rect(10, 10, 20, 20);
        this.canvas.closePath();
        this.canvas.fill();
    }
    
}