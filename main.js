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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
