$(document).ready(function() {
    let first_scroll = false;
    let second_scroll = false;
  
    $(window).on("mousewheel", function(event) {
        if (event.originalEvent.deltaY > 0) {
            $(".item-3").removeClass("fadeInLeft-reverse")
            $(".item-2").removeClass("fadeInLeft-reverse")
            $(".item-1").removeClass("fadeInLeft-reverse")
          // Scrolling down
          if (!first_scroll) {
            first_scroll = true;
            $(".vertical-word").addClass("fadeInDown");
            $(".item-1").addClass("fadeInLeft");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          } else if (first_scroll && !second_scroll) {
            second_scroll = true;
            $(".item-2").addClass("fadeInLeft");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          } else if (first_scroll && second_scroll) {
            $(".item-3").addClass("fadeInLeft");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          }
        } else {
          // Scrolling up
          $("body").css("overflow", "hidden");
          if (second_scroll) {
            second_scroll = false;
            $(".item-3").removeClass("fadeInLeft").addClass("fadeInLeft-reverse");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          } else if (first_scroll) {
            first_scroll = false;
            $(".item-2").removeClass("fadeInLeft").addClass("fadeInLeft-reverse");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          } else {
            $(".vertical-word").removeClass("fadeInDown").addClass("fadeOutUp");
            $(".item-1").removeClass("fadeInLeft").addClass("fadeInLeft-reverse");
            setTimeout(function() {
              $("body").css("overflow", "auto");
            }, 500); // duration of animation
          }
        }
       
      });
      
  });
  