var pic = document.getElementById("vimage");
var go = document.getElementById("grow");
var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var width = pic.getAttribute("width");
var height = pic.getAttribute("height");
var circle = document.getElementById("circle");

var makeCircle = function(cx, cy, r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  colors[parseInt(cy / 20)]);
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
}

var clearPic = function(e){
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
}

var intervalID;

var animate = function(e){
    end(e);
    clearPic();
    circle = newCircle();
    var rInc = 1;
    var radius = parseInt(circle.getAttribute("r"));

    var drawDot = function() {
	circle.setAttribute("r", radius);
	radius += rInc;
	if (radius < 1 || radius > height / 2){
	    rInc = - rInc;
	}
    }
    intervalID = window.setInterval( drawDot, 10 );
}

var end = function(e){
    window.clearInterval( intervalID );
}

var newCircle = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", width / 2);
    c.setAttribute("cy", height / 2);
    c.setAttribute("r", 0);
    c.setAttribute("fill",  "blue");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    return c;
}

go.addEventListener("click", animate);
stop.addEventListener("click", end);
clear.addEventListener("click", clearPic);
