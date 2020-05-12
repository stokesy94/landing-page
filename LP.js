








// function smoothScroll(target,duration){
//   var target = document.getElementById(target);
//   var targetPostion = target.getBoundingClientRect().top + window.scrollY;
//   var startPosition = window.pageYOffset;
//   var distance = targetPostion - startPosition;
//   var startTime = null;
//
//   function animation(currentTime){
//     if(startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, targetPostion, duration);
//     window.scrollTo(0, run);
//     if(timeElapsed < duration) requestAnimationFrame(animation);
//   }
//
//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }
//
//
//     requestAnimationFrame(animation);
// }
//
//
// var animateAbout = document.getElementById("animateAbout");
// var animateArrow = document.getElementById("animateArrow");
// var animateProjects = document.getElementById("animateProjects");
// var animateContact = document.getElementById("animateContact");
//
// animateAbout.addEventListener("click", function(){
//   smoothScroll("about", 1000);
// });
//
// animateArrow.addEventListener("click", function(){
//   smoothScroll("about", 1000);
// });
//
// animateProjects.addEventListener("click", function(){
//   smoothScroll("projects", 1000);
// });
//
// animateContact.addEventListener("click", function(){
//   smoothScroll("contact", 1000);
// });
