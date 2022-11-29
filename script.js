"use strict";
// function fontAwesome() {
//     var css = document.createElement("link");
//     css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
//     css.rel = "stylesheet";
//     css.type = "text/css";
//     document.getElementsByTagName("head")[0].appendChild(css);
//   }
//   fontAwesome();
const bod = document.getElementById("body")
const menu = document.getElementById("apps")
const mic = document.getElementsByClassName("goxjub")
const theme = document.getElementById("theme")
const links = document.getElementsByTagName("a")
const set = document.getElementById("settings")



// const butt = documenti.getElementsByClassName("button")
// const on = document.getElementById("on")
// const off = document.getElementById("off")
function show() {
    menu.classList.toggle("show");
    console.log("ldfnkjnskd");
    }

function micloc(){
    window.location.assign("https://about.google/products/?tab=rh")
}


// function switchTheme(){
//     console.log("jkjkjj");
//     if(on.style.display == "none"){
//         on.style.display = "block";
//     }
//     if (on.style.display == "block") {
//     on.style.display = "none";
//     }
//     if(off.style.display == "none"){
//     off.style.display = "block";
//     }
//     if (on.style.display == "block") {
//     off.style.display = "none";
//     }
// }

theme.innerText = "dark tehem : on"
 function switchTheme(){
    if (theme.innerText == 'dark tehem : on') {
theme.innerText = "dark tehem : off "
    }
    else{
theme.innerText = "dark tehem : on"

    }
 }

 function changeTheme(){
    bod.classList.toggle("lightmode")
    links.classList.toggle("lightmode-text")
 }

 function tg(){
    set.classList.toggle("show");


 }