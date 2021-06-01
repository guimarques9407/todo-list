const itemForm=document.getElementById("itemForm");
const itemInput=document.getElementById("itemInput");
const clearList=document.getElementById("clear-list");
const itemContainer=document.querySelector(".item-container");
const feedback=document.querySelector(".feedback");

function addItemToUi(e){
    e.preventDefault();
    if(itemInput.value.trim()==""||itemInput.value==""){
        feedback.style.display="flex";
    }
    //ver se da para passar a div item como this para todos os eventListeners
    else{
        itemContainer.insertAdjacentHTML("beforeend",`<div class="item my-3" onclick="checkItem(this, event)">
            <h5 class="item-name text-capitalize">${itemInput.value}</h5>
            <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon" title="checar item" ><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon" title="editar item"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon" title="excuir item"><i class="far fa-times-circle"></i></a>
            </div>`)};
}

 function checkItem(element,e){
    if(e.target.classList.contains("fa-check-circle")){
        element.querySelector("h5").classList.add("completed");
    }
 }

//event listeners
itemForm.addEventListener("submit",addItemToUi);

