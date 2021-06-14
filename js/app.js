const itemForm=document.getElementById("itemForm");
const itemInput=document.getElementById("itemInput");
const clearList=document.getElementById("clear-list");
const feedback=document.querySelector(".feedback");
const itemList=document.querySelector(".item-list");
let items=[];

function handleItem(e){
    e.preventDefault();
    if(itemInput.value.trim()==""||itemInput.value==""){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    }
    else{
        addItemToUi(itemInput.value)
    }
}

function addItemToUi(itemName){
    let element=document.createElement("div");
    element.classList.add("item","my-3");
    element.insertAdjacentHTML("beforeend",
        `<h5 class="item-name text-capitalize">${itemName}</h5>
        <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon" title="checar item" ><i class="far fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon" title="editar item"><i class="far fa-edit"></i></a>
        <a href="#" class="delete-item item-icon" title="excluir item"><i class="far fa-times-circle"></i></a>`)
    element.addEventListener("click",chooseButton)    
    itemList.appendChild(element);    
    itemInput.value="";
    items.push(itemName);
    setToLocalStorage()
    };

 function chooseButton(event){
    let itemName=this.querySelector("h5")
    if(event.target.classList.contains("fa-check-circle")){
        itemName.classList.toggle("completed");
        event.target.classList.toggle('visibility');
    }
    else if(event.target.classList.contains("fa-edit")){
        itemInput.value=itemName.textContent;
        itemList.removeChild(this);
    }
    else if(event.target.classList.contains("fa-times-circle")){
        let elementIndex=items.indexOf(itemName.textContent)
        items.splice(items.indexOf(elementIndex),1)
        itemList.removeChild(this);
        setToLocalStorage()
    }
 }

 function clearItems(){
    itemList.innerText='';
    items=[];
    setToLocalStorage()
 }

 function setToLocalStorage(){
    console.log(items)
    if(!!localStorage.getItem("items")){
        localStorage.removeItem("items");
    }
    localStorage.setItem("items",JSON.stringify(items));
 }
 function getDataFromLocalStorage(){
    if ( localStorage.getItem('items')=== null){
        return
    }
    else{
        let itemsName=JSON.parse(localStorage.getItem('items'))
        itemsName.forEach(item=>addItemToUi(item))
    }
 }
//event listeners
itemForm.addEventListener("submit",handleItem);
clearList.addEventListener("click",clearItems)
getDataFromLocalStorage()
