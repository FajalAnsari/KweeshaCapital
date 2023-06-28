// <!--================= Progress bar on scroll window js ======================-->

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
   
    if(pos > 100){
     scrollProgress.style.display = "grid";
    } else {
     scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
   scrollProgress.style.background = `radial-gradient(white 50%, transparent 51%),
        conic-gradient(transparent 0% ${scrollValue}%, gainsboro ${scrollValue}%),
        conic-gradient( var( --primary)  0deg, var( --primary)  90deg,  var( --primary) 180deg,  var( --primary))`;
      };
 
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;


 /*===== Nav Toggler =====*/
 const navMenu = document.querySelector(".menu");
 navToggle = document.querySelector(".menu-btn");
 if(navToggle)
 {
     navToggle.addEventListener("click", () =>
     {
         navMenu.classList.toggle("active");
     })
 }
 // closing menu when link is clicked
 const navLink = document.querySelectorAll(".nav-link");
 function linkAction()
 {
     const navMenu = document.querySelector(".menu");
     navMenu.classList.remove("active")
 }
 navLink.forEach(n => n.addEventListener("click", linkAction))