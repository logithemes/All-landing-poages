$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function(){
        $(".menu").removeClass("menuact");
    })

  
    //BANNER ANIMATION
    $(".banner .ban-lhs").addClass("ani1");
  


    //TOP SEARCH
    $(".search-top").on("click", function(){
        $(".top-cl-fun").addClass("act");
    })


    //TOP SEARCH BOX REMOVE
    $(".top-cl-fun span").on("click", function(){
        $(".top-cl-fun").removeClass("act");
    })

    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })


      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })



       //GOOGLE MAP - SCROLL REMOVE
       $(".contact-map")
       .on('click', function () {
           $(this).find("iframe").addClass("clicked")
       })
       .on('mouseleave', function () {
           $(this).find("iframe").removeClass("clicked")
       });



      //FAQ CLICK FUNCTION
    $(".faq-rhs ul li h3").on("click", function () {
        $(".faq-rhs p").slideUp(500);
        $(this).siblings(".faq-rhs p").slideDown(500);
        $(".faq-rhs ul li h3").removeClass("act");
        $(this).addClass("act");
    })


//WORK SHOWCASE
$(".showcase span").on("click", function(){
    $(".showcase span").removeClass("act2");
    $(this).addClass("act2");
    var _shcase = $(this).attr("id");
    $(".tab-showcase-main").hide();
    $("#" + _shcase + "_show").show();
})





//ON WINDOW SCROOL FUNCTION

$(window).on("scroll", function(){
    var _topval = $(window).scrollTop();

    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});
  



});



