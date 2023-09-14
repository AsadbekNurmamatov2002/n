let btnM=document.getElementById("btnM");
let navlinks=document.querySelector(".nav-links");

btnM.onclick=()=>{
    btnM.classList.toggle("fa-times")
    navlinks.classList.toggle("active")
}
