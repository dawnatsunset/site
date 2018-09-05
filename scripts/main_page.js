$(".hamburger").click(function(e) {
  console.log("clicked");
  $(".hamburger").toggleClass("is-active");
  $("#wrapper").toggleClass("toggled");
})


