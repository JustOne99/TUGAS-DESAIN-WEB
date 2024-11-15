var slideindex = 1;
slideshow();
function slideshow() {
  var i;
  var sd = document.getElementsByClassName("slides");
  console.log("jumlahslides: " + sd.length);
  for (i = 0; i < sd.length; i++) {
    sd[i].style.display = "none";
  }
  if (slideindex > sd.length) {
    slideindex = 1;
  }
  sd[slideindex - 1].style.display = "block";
  slideindex++;
  setTimeout(slideshow, 2000);
}
