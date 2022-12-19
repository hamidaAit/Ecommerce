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

/*let slider = document.getElementsByClassName('header')[0];
setInterval(function(){

if ( slider.style.backgroundImage == '../public/img/1.jpg')	slider.style.backgroundImage = "url(../public/img/2.jpg)" else
if ( slider.style.backgroundImage == '../public/img/2.jpg')	slider.style.backgroundImage = "url(../public/img/3.jpg)" else
if ( slider.style.backgroundImage == '../public/img/3jpg')	slider.style.backgroundImage = "url(../public/img/4.jpg)"else
if ( slider.style.backgroundImage == '../public/img/4.jpg')	slider.style.backgroundImage = "url(../public/img/1.jpg)"

},4000);*/
