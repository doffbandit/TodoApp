const userInput = document.getElementById("userInput");
const notes = document.querySelector('ul');
const button = document.getElementById('buttonSubmit')



function createLiElement() {
    const li = document.createElement('li');
    li.setAttribute('id', 'list-item');
    // li.style.color = "#555";
    // li.style.backgroundColor = "#679289";
    // li.style.width = "100px";
    // li.style.height = "20px"
    li.textContent = userInput.value;
    return li;
}


function addButton() {
    const button = document.createElement('button') ;  //create a new element called 'button' and assign it to the variable "button"
    button.style.backgroundColor = "#f655sf";
    button.innerHTML="Delete";

    return button;
}


button.addEventListener("click",function(e) {
    e.preventDefault();
    
    const button = addButton()
    const liElement = createLiElement()

    const div = document.createElement("div");
    div.setAttribute('class', "item");

    div.appendChild(liElement)
    div.appendChild(button)
    
    notes.appendChild(div);

  
});

// console.log(writeNote());
// function deleteNote() {
//     const 
// }
