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
    input.style.backgroundColor = "#ebebeb";
})


// change color input
let backColor;
function changeColorInput (event) {
    backColor = event.target.style.backgroundColor;
    input.style.backgroundColor = backColor;
}


// create and delete li

// delete li
function deleteNote () {
    this.remove();
}

// create li
let addIcon = $.getElementById("add-note-i");
let listNote = $.getElementById("list");
let newli;
let newSpan;
addIcon.addEventListener("click" , function () {
    if(input.value != ""){
        newli = $.createElement("li");
        newli.setAttribute("class" , "items");
        newli.innerHTML = input.value;
        newli.addEventListener("click" , deleteNote)
        newli.style.backgroundColor = backColor;
        listNote.appendChild(newli);
        backColor = "#ebebeb";
    }
    
})