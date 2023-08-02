/* CLIENT-SIDE FORM NOT EMPTY VALIDATION */
const CLIENTNAME = document.getElementById("nama")
const EMAIL = document.getElementById("email")
const PACK_OPT = document.getElementById("pack")
const SEND_BUTTON = document.getElementById("send")

SEND_BUTTON.addEventListener("click", function(event){
    event.preventDefault()

    if(CLIENTNAME.value == ""){
        alert("Please fill your name")
    }
    else if(EMAIL.value == ""){
        alert("Please fill your email address")
    }
    else if(PACK_OPT.value == ""){
        alert("Please choose a package that pick your interest")
    }
})