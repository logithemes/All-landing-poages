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


/*$(document).mousemove(function(event){
    var _x = event.pageX + "px";
    var _y = event.pageY + "px";
    $(".corsor").css({'transform' : 'translate(' + _x +', ' + _y + ')'});
   
    
});*/
