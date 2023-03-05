let myBell=document.querySelector(".notification");
let myNotifications=document.querySelector(".notification-container");
myBell.addEventListener("click",()=> {
    myNotifications.classList.toggle("toggle-notification");
})

