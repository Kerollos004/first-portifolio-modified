//=====================================> toggle menu 
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active")
    menu.classList.toggle("active")
}

//===================================> links &  classes
let links = document.querySelectorAll(".link")
links.forEach((link) => {
    link.addEventListener("click", removeClasses)
    link.addEventListener("click" , changeClasses)
})
function removeClasses() {
    menuBtn.classList.remove("active")
    menu.classList.remove("active")
}
function changeClasses() {
    links.forEach((link) => {
        link.classList.remove("active")
        this.classList.add("active")
    })
}
//==================================>counters
let counts = document.querySelectorAll(".count")
function counter(el) {
    let goal = el.dataset.goal 
    let interval = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(interval)
        }
    } , 1000 / goal )
}
//==-==============================> scroll 
let header = document.querySelector('header')
let started = false
let info = document.getElementById("info")
window.onscroll = () => {
    if (scrollY > 20) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
    if (scrollY >= info.offsetTop - 600) {
        if (!started) {// if start = true do this function
            counts.forEach(count => {
                counter(count)
            })
        }
        started = true //if scroll y = this sec make it true
    }
}
/////////////////////////////////////////clear inputs
let send = document.querySelector(".send")
let inps = document.querySelectorAll(".inp")
send.onclick = () => {
    inps.forEach(inp => {
        inp.value = ""
    })
}
