var x = document.getElementById("dropdown-burgerbar")
  var y = document.getElementById("kurv")


function burgerbarFunktion() {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block", y.style.display = "none";
    }
  }


function kurvFunktion() {
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block", x.style.display = "none";
    }
  }

// scroll på forsiden https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
// scroll som en enhed på på siden
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);




//carocel til produktsiden https://www.section.io/engineering-education/how-to-make-an-image-carousel-for-your-website/
//

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

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




function tilKurv() {
  alert("Lægger produktet i kurven");
}

function sendBesked() {
  alert("Besked sendt")
}



var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
