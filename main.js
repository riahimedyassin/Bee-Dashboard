checkMail=() => {
    let Regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let myMail=document.querySelector("#email"); 
    if(!Regex.test(myMail.value)) {
        myMail.classList.add("error");
        document.querySelector(".mail-error").innerHTML="Type a valid Email"
        return false
    }
    else {
        document.querySelector(".mail-error").innerHTML=""
        myMail.classList.remove("error");
    }
    return true
    
    
}
checkPass=()=> {
    let Regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    let myPass=document.querySelector("#password"); 
    if(!Regex.test(myPass.value)) {
        myPass.classList.add("error");
        document.querySelector(".pass-error").innerHTML="Type a valid Password"
        return false
    }
    else {
        document.querySelector(".pass-error").innerHTML=""
        myPass.classList.remove("error");
    }
    return true

}
document.querySelector(".sign-in").addEventListener("click",()=> {
    return checkMail() && checkPass()
})