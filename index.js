const Slide = () => {
    const navb=document.querySelector(".nav-button");
    const navl=document.querySelector(".nav-links");
    const navlink = document.querySelectorAll(".nav-links li")
    navb.addEventListener("click",()=>{
    navl.classList.toggle("nav-active");
    });
    navlink.forEach((link,index) => { 
      link.style.animation =`navLinkFade 0.5s ease forward ${index / 10 + 0.3}s`;
        
    });
}
Slide();