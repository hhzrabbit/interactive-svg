var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");

var makeCircle = function(cx, cy, r){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx);
    c.setAttribute("cy", cy);
    c.setAttribute("r", r);
    c.setAttribute("fill",  "blue");
    c.setAttribute("stroke", "black");
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
}

var reincarnate = function(e){

};

var draw = function(e){
    var circle = makeCircle(e.offsetX, e.offsetY, 10);
    circle.addEventListener("click", changeColor, true);
};

var movement = function(e){
};



pic.addEventListener("click", draw);
move.addEventListener("click", movement);
clear.addEventListener("click", clearPic);
