if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "C", "Ca", "Cat", " /", "W", "Wo", "Wor", "Worl", "World", "/","G","Ga","Gam","Game","Games","/","C","Co",'Com',"Comm","Commu","Commun","Communi","Communit","Community","/","S","Si","Sit","Site","/",];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}


