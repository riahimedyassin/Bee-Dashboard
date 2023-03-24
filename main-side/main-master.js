let myBell=document.querySelector(".notification");
let myNotifications=document.querySelector(".notification-container");
myBell.addEventListener("click",()=> {
    myNotifications.classList.toggle("toggle-notification");
})
let myLoad=document.querySelector(".preloader-animation");
window.addEventListener("load",()=> {
    myLoad.style.display="none"
});
let myBurger=document.querySelector(".burger");
let myAside=document.querySelector("aside")
myBurger.addEventListener("click",()=> {
    myAside.classList.toggle("display-burger")
})
let myDelete=document.querySelector(".deleteContainer");
myDelete.classList.add("hiddeDelete") ;
let myDeleteButton=document.querySelectorAll(".delete");
myDeleteButton.forEach(el=> {
    el.addEventListener("click",()=> {
        myDelete.classList.remove("hiddeDelete") ;
    })
})
let DelteConfirm=document.querySelectorAll(".btnDel");
DelteConfirm.forEach(el=> {
    el.addEventListener("click",()=> {
        myDelete.classList.add("hiddeDelete");
    })
})

