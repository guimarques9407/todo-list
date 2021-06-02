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
            <a href="#" class="delete-item item-icon" title="excluir item"><i class="far fa-times-circle"></i></a>`)
        element.addEventListener("click",chooseButton)    
        itemContainer.appendChild(element);    
        itemInput.value="";
        items.push(element);
        setToLocalStorage()
        };
}
 function chooseButton(event){
    let itemName=this.querySelector("h5")
    if(event.target.classList.contains("fa-check-circle")){
        itemName.classList.toggle("completed");
    }
    else if(event.target.classList.contains("fa-edit")){
        itemInput.value=itemName.textContent;
        itemContainer.removeChild(this);
    }
    else if(event.target.classList.contains("fa-times-circle")){
        items.splice(items.indexOf(this),1)
        console.log(items)
        itemContainer.removeChild(this);
    }
 }

 function clearItems(){
    for (let child of itemContainer.children){
        if(child.classList.contains("item")){
            child.remove();
        } 
    }
 }

 function setToLocalStorage(){
    if(!!localStorage.getItem("items")){
        localStorage.removeItem("items");
    }
    localStorage.setItem("items",JSON.stringify(items));
 }
 function getDataFromLocalStorage(){
    let elements=JSON.parse(window.localStorage.getItem('items'));
    console.log(elements)
 }
//event listeners
itemForm.addEventListener("submit",addItemToUi);
clearList.addEventListener("click",clearItems)
getDataFromLocalStorage()
