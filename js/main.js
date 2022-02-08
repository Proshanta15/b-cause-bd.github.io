



$(document).ready(function () {
    //Owl-carousel For home Page

  $("#slider .carousel .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  });




    //STICKY MENU On Scroll
    var height = $("#menu_part").height();
    $(window).scroll(function () {
       
      if ($(this).scrollTop() > height) {
        $(".menu_list").addClass("fixed");
       
      } else {
        $(".menu_list").removeClass("fixed");
      
      }
    });