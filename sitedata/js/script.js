$(function() {

  //-----Freewall settings-------------
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
  //-----------------------------------


  $("#menu-list").load("./modules/menu-list.html");

  $("#menu-btn").click(function () {
      $("#menu-list").slideToggle();
  });

});