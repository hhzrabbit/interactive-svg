var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");

var width = parseInt(pic.getAttribute("width"));
var height = parseInt(pic.getAttribute("height"));

var makeCircle = function(cx, cy, r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xInc", 1);
    c.setAttribute("yInc", 1);
    console.log(c);
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
    newCircle(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
    e.stopPropagation();
};

var draw = function(e){
    var circle = makeCircle(e.offsetX, e.offsetY, 10);
    circle.addEventListener("click", changeColor, true);
};

var newCircle = function(x, y){
    var circle = makeCircle(x, y, 10);
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
	    c.setAttribute("cx", x + xInc);
	    c.setAttribute("cy", y + yInc);
	    
	    if (x < 10  || x > width - 10){
		xInc = - xInc;
	    }
	    if (y < 10 || y > height - 10){
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

pic.addEventListener("click", draw);
move.addEventListener("click", movement);
clear.addEventListener("click", clearPic);

var end = function(e){
    window.clearInterval( intervalID );
}
