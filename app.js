let $ = document;
let input = $.getElementById("input-addnote");
let clearIcone = $.getElementById('clear-input-i');

// delete outline when focus on input
input.addEventListener("focus" , function () {
    input.style.outline = "none";
})

// clear input value
clearIcone.addEventListener("click" , function () {
    input.value = "";
})


// change color input
let color;
function changeColorInput (event) {
    color = event.target.style.backgroundColor;
    input.style.backgroundColor = color;
}


// create li element and add to ul
