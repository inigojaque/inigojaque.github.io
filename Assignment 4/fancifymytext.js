function bigger(){
    hello();
    var words = document.getElementById("words");
    words.style.fontSize="24pt";
}

function hello(){
    alert("Hello, world!");
}

function fancy(){
    var check = document.getElementById("fancy");
    var words = document.getElementById("words");
    if(check.checked){
        words.style.fontWeight ="bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline blink";
    }else{
        words.style.fontWeight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
    }
}
function boring(){
    var words = document.getElementById("words");
    words.style.fontWeight = "normal";
    words.style.color = "black";
    words.style.textDecoration = "none";
}
function moo(){
    var words = document.getElementById("words");
    words.style.textTransform = "uppercase";
    var parts = words.ariaValueMax.split(".");
    words.value = parts.join("-MOO");
}