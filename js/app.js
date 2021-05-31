const itemForm=document.getElementById("itemForm");
const itemInput=document.getElementById("itemInput");
const clearList=document.getElementById("clear-list");
const itemContainer=document.querySelector(".item-container");

function addItemToUi(e){
    e.preventDefault();
    itemContainer.insertAdjacentHTML("beforeend",`<div class="item my-3">
    <h5 class="item-name text-capitalize">${itemInput.value}</h5>
    <div class="item-icons">
     <a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
     <a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
     <a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>`);
}

//event listeners
itemForm.addEventListener("submit",addItemToUi);

