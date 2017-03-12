var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
var stop = document.getElementById("stop");

var width = parseInt(pic.getAttribute("width"));
var height = parseInt(pic.getAttribute("height"));

var radius = 15;

var makeCircle = function(cx, cy, r, xInc, yInc){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xInc", xInc);
    c.setAttribute("yInc", yInc);
    pic.appendChild(c);
    return c;
}

var clearPic = function(e){
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
}

var changeColor = function(e){
    e.target.style.fill = "green";
    e.stopPropagation();
    e.target.addEventListener("click", reincarnate, true);
}

var reincarnate = function(e){
    e.target.parentNode.removeChild(e.target);
    var x = Math.floor(Math.random() * (width - (2 * radius)) + radius);
    var y = Math.floor(Math.random() * (height - (2 * radius)) + radius);
    var xInc = Math.floor(Math.random() * 3 + 1);
    var yInc = Math.floor(Math.random() * 3 + 1);
    var circle = makeCircle(x, y, radius, xInc, yInc);
    circle.addEventListener("click", changeColor, true);
    e.stopPropagation();
};

var draw = function(e){
    var xInc = Math.floor(Math.random() * 3 + 1);
    var yInc = Math.floor(Math.random() * 3 + 1);
    var circle = makeCircle(e.offsetX, e.offsetY, radius, xInc, yInc);
    circle.addEventListener("click", changeColor, true);
};

var intervalID;

var movement = function(e){
    end(e);

    var bounce = function() {
	var circles = document.getElementsByTagName("circle");

	for (var i = 0; i < circles.length; i++){
	    var c = circles[i];
	    var x = parseInt(c.getAttribute("cx"));
	    var y = parseInt(c.getAttribute("cy"));
	    var xInc = parseInt(c.getAttribute("xInc"));
	    var yInc = parseInt(c.getAttribute("yInc"));
	    
	    if (x < radius || x > width - radius){
		xInc = - xInc;
	    }
	    if (y < radius || y > height - radius){
		yInc = - yInc;
	    }

	    c.setAttribute("cx", x + xInc);
	    c.setAttribute("cy", y + yInc);
	    c.setAttribute("xInc", xInc);
	    c.setAttribute("yInc", yInc);
	}
    }
    intervalID = window.setInterval( bounce, 10 );
}

var end = function(e){
    window.clearInterval( intervalID );
}

pic.addEventListener("click", draw);
move.addEventListener("click", movement);
clear.addEventListener("click", clearPic);
stop.addEventListener("click", end);
