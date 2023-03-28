let myNotify=document.querySelector(".notify");
let myNotfiyButton=document.querySelectorAll(".notifyMe");

myNotfiyButton.forEach(el=> {
    el.addEventListener("click",()=> {
        myNotify.style.cssText="display:flex"
    })
})
document.querySelector(".close").addEventListener("click",()=> {
    myNotify.style.cssText="display:none"
})