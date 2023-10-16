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

    

    


   /* $(".the-bridge").mousemove( function(event){
        var _translatex = '-'  + event.pageX / 20 + "px";                                                                  
        var _translatey =   + event.pageY / 20 + "px"; 
        $(".wpb_wrapper img").css({'transform' : 'rotate(' + _translatex +', ' + _translatey + ')'});
    })*/



    //mouse move rotate
    $("#about").mousemove(function(e) {
        $('.wpb_wrapper img').css('transform', 'rotateX(0deg) rotateY(0deg) perspective(0px)');
        
        var rotate_X;
        var rotate_Y;
        var perspective_z;
        var invert = false;
        
        if (invert) {
          rotate_X =  e.pageX / 50;
          rotate_Y = e.pageY / 60;
          perspective_z = e.pageX / 10;
        } else if (!invert) {
          rotate_X = e.pageX / 50;
          rotate_Y = -e.pageY / 60;
          perspective_z = e.pageX / 10;

        }
        
        $('.wpb_wrapper img').css('transform', 'rotateX(' + rotate_X + 'deg) rotateY(' + rotate_Y + 'deg) perspective(' + perspective_z + 'px)')
      });

      $("#about").mouseleave(function(){
        $(".wpb_wrapper img").css("transform", "none")
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

    var _topmi = "-" + _topval/2+"px";
    var _toppl = _topval/20 + "px";
    $(".client-logo-left").css({'transform' : 'translateX(' + _toppl +')'});
    $(".client-logo-wrap1 .client-logo").css({'transform' : 'translateX(' + _topmi +')'});

    
   // $(".ban-left").css({'transform' : 'translateX(' + _topMi +' )'});



    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});

  

});



