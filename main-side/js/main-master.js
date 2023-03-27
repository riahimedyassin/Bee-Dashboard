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
function showZoom () {
    let myMode=document.querySelector("#selectMode"); 
    let myZoom=document.querySelector(".input-zoom")
    if (myMode.selectedIndex==1) {
        myZoom.removeAttribute("hidden")
    }
    else {
        myZoom.setAttribute("hidden","true")
    }
}