/* CLIENT-SIDE FORM NOT EMPTY VALIDATION */
const CLIENTNAME = document.getElementById("nama")
const EMAIL = document.getElementById("email")
const PACK_OPT = document.getElementById("pack")
const SEND_BUTTON = document.getElementById("send")

SEND_BUTTON.addEventListener("click", function(event) {
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

/* SLIDESHOW AUTO-SLIDE */
const SLIDE = document.getElementsByClassName("slideshow")
let slideindex = 1

nextSlide(0)

setInterval(function() {
    console.log(slideindex)
    nextSlide(1)
}, 4000)

function nextSlide(index) {
    showSlide(slideindex += index)
}

function showSlide(index){
    if(index > SLIDE.length) {
        slideindex = 1
    }
    if(index < 1) {
        slideindex = SLIDE.length
    }

    for (let i = 0; i < SLIDE.length; i++) {
        SLIDE[i].style.display = "none"
    }

    SLIDE[slideindex-1].style.display = "flex"
}