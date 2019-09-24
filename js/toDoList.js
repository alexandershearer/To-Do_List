var submit = document.getElementById("submit");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function createListElement() {
    var li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);

    input.value = "";

    function markDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", markDone);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("deleteButton");
    li.appendChild(deleteButton);


    function deleteListItem() {
        li.classList.add("delete")
    }

    deleteButton.addEventListener("click", deleteListItem);
}


function createListItemSubmitButton() {
    if (input.value.length > 0) {
        createListElement();
    }

}

function createListItemEnterKey(event) {
    if (input.value.length > 0 && event.keyCode == 13) {
        createListElement();
    }
}

submit.addEventListener("click", createListItemSubmitButton);

input.addEventListener("keypress", createListItemEnterKey);