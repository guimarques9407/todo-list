const itemForm=document.getElementById("itemForm");
const itemInput=document.getElementById("itemInput");
const clearList=document.getElementById("clear-list");
const itemContainer=document.querySelector(".item-container");
const feedback=document.querySelector(".feedback");
let items=[];

function addItemToUi(e){
    e.preventDefault();
    if(itemInput.value.trim()==""||itemInput.value==""){
        feedback.style.display="flex";
    }
    else{
        let element=document.createElement("div");
        element.classList.add("item","my-3");
        element.insertAdjacentHTML("afterBegin",
            `<h5 class="item-name text-capitalize">${itemInput.value}</h5>
            <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon" title="checar item" ><i class="far fa-check-circle"></i></a>
            <a href="#" class="edit-item mx-2 item-icon" title="editar item"><i class="far fa-edit"></i></a>
            <a href="#" class="delete-item item-icon" title="excuir item"><i class="far fa-times-circle"></i></a>`)
        itemContainer.appendChild(element)    
        itemInput.value=""
        items.push(element)
        console.log(items)
        };

}

 function chooseButton(element,e){
    let itemName=element.querySelector("h5")
    if(e.target.classList.contains("fa-check-circle")){
        itemName.classList.toggle("completed");
    }
    else if(e.target.classList.contains("fa-edit")){
        itemInput.value=itemName.textContent;
        itemContainer.removeChild(element);
    }
    else if(e.target.classList.contains("fa-times-circle")){
        itemContainer.removeChild(element);
    }
 }

 function clearItems(){
    for (let child of itemContainer.children){
        if(child.classList.contains("item")){
            child.remove();
        } 
    }
 }
//event listeners
itemForm.addEventListener("submit",addItemToUi);
clearList.addEventListener("click",clearItems)

