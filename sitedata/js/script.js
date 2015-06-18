$(function() {
  var wall = new Freewall("#freewall");
  // wall.fitWidth();
  wall.reset({
    selector: '.brick',
    animate: true,
    cellW: 196,
    cellH: 196,
    delay: 30,
    onResize: function() {
      wall.fitWidth();
    }
  });

  $(document).ready(function(){
    wall.fitWidth();
  });

  $("#menu-btn").click(function () {
      $("#menu-list").slideToggle();
  });
});