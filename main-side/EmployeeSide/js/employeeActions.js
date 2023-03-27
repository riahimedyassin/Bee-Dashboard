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