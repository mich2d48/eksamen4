
//Header - kurven
var l = document.getElementById("dropdown-burgerbar")
  var k = document.getElementById("kurv")


function kurvFunktion() {
    if (k.style.display === "block") {
      k.style.display = "none";
    } else {
      k.style.display = "block", l.style.display = "none";
    }
  }

// scroll på siderne https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
// scroll som en enhed på siden
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);




//carocel til index og produktsiden https://www.section.io/engineering-education/how-to-make-an-image-carousel-for-your-website/
var slidePosition = 1;
SlideShow(slidePosition);

// navigering frem og tilbage pile
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  billederne
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

//funktionen for slideshowet
function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 









