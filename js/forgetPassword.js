let myForget=document.querySelector("#forgetPassword");
let myRemember=document.querySelector("#goBack");
myForget.addEventListener("click",()=>{
   hide("forgetHide","showForget")
}) 
myRemember.addEventListener("click",()=>{
    hide("showForget","forgetHide")
 }) 

function hide(tohide,toshow) {
        document.querySelectorAll(`.${tohide}`).forEach(el=> {
            el.setAttribute("hidden","true")
        })
       document.querySelectorAll(`.${toshow}`).forEach(el=> {
            el.removeAttribute("hidden");
       })
}