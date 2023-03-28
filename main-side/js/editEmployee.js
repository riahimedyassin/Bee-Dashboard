let myEditable=document.querySelectorAll(".input-edit"); 
let myEditButton=document.querySelector(".edit-icon");
myEditButton.addEventListener("click",()=> {
    myEditable.forEach(el=> {
        el.toggleAttribute("disabled")
    })
})
let myHidden=document.querySelectorAll(".hidden-input");
myHidden.forEach(el=> {
    el.classList.add("hiddeMore");
})
let myShow=document.querySelector(".show-more");
let nb=1;
myShow.addEventListener("click",()=> {
    myHidden.forEach(el=> {
        el.classList.toggle("showMore");
        nb++;
        nb%2==0 ? myShow.innerHTML="Show Less" : myShow.innerHTML="Show More" 
    })
});
