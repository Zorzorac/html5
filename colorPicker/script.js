var changeBtn = document.getElementById("change");

function Preview() {
    var perview = document.getElementById("preview");
    
    color = document.querySelector('input[name="color"]:checked').value;
    
    console.log("the color is " +color);
    
    preview.style.background = color;
}

function changeColor() {
    console.log("the color is " + color);
    
    document.body.style.background = color;
}

changeBtn.onclick = function() {
    var modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

function Close() {
    var perview = document.getElementById("preview");
    var modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}

window.onclick = function(event) {
    var perview = document.getElementById("preview");
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        preview.style.opacity = "0";
        preview.style.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
}