const itemForm=document.getElementById("itemForm");
const itemInput=document.getElementById("itemInput");
const clearList=document.getElementById("clear-list");
const feedback=document.querySelector(".feedback");
const itemList=document.querySelector(".item-list");
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
        itemList.appendChild(element);    
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
        itemList.removeChild(this);
    }
    else if(event.target.classList.contains("fa-times-circle")){
        let elementIndex=Array.from(itemList.children).indexOf(this)
        items.splice(items.indexOf(elementIndex),1)
        setToLocalStorage()
        itemList.removeChild(this);
    }
 }
//arrumar essa função,está deletando um por clique,tem que deletar todos
 function clearItems(){
    itemList.innerText=''
 }

 function setToLocalStorage(){
     console.log(items)
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
