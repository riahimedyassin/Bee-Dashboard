let myEditable=document.querySelectorAll(".input-edit"); 
let myEditButton=document.querySelector(".edit-icon");
myEditButton.addEventListener("click",()=> {
    myEditable.forEach(el=> {
        el.toggleAttribute("disabled")
    })
})