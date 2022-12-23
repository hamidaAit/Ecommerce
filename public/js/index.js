
/*automatique
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}*/

//slider
 let slide= document.getElementsByClassName("slide"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  current = 0;




  // Clear all images
function reset() {
  for (let i = 0; i < slide.length; i++) {
  	slide[i].style.display = "none";
//  	slide[i].classList.remove('modal-active')
  }
}
//afficher the first img
function startSlide() {
  reset();
  slide[0].style.display = "block";
  
}
//afficher la prochaine img
function slideRight() {
  reset();
  slide[current + 1].style.display = "block";
  current++;
}

//afficher l'img precedente
function slideLeft() {
  reset();
  slide[current - 1].style.display = "block";
  current--;
}
//boutoon next

next.addEventListener("click", function() {
  if (current === slide.length - 1) {
    current = -1;
  }
  slideRight();
});

//boutton precedent
prev.addEventListener("click", function() {
  if (current === 0) {
    current = slide.length;
  }
  slideLeft();
});

startSlide();
setInterval(function() {
  if (current === slide.length - 1) {
    current = -1;
  }
  slideRight();

},4000);

 

