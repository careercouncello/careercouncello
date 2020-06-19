$(".regular").hover(function () {
  $("#h2r").css("color", "white");
});
$(".regular").mouseleave(function () {
  $("#h2r").css("color", "#543986");
});
$(".advance").hover(function () {
  $("#h2d").css("color", "white");
});
$(".advance").mouseleave(function () {
  $("#h2d").css("color", "#543986");
});
$("#btnr").hover(function () {
  $("#btnr").css("background-color", "#543986");
  $("#are").css("color", "white");
});
$("#btnr").mouseleave(function () {
  $("#btnr").css("background-color", "white");
  $("#are").css("color", "#543986");
});
$("#btna").hover(function () {
  $("#btna").css("background-color", "#543986");
  $("#aa").css("color", "white");
});
$("#btna").mouseleave(function () {
  $("#btna").css("background-color", "white");
  $("#aa").css("color", "#543986");
});
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

var typed = new Typed(".animate-cc", {
  strings: ["CareerCouncello"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true,
});
