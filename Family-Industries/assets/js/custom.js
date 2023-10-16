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


function getCursor(event) {
    let x = event.clientX;
    let y = event.clientY;
    let _position = `X: ${x}<br>Y: ${y}`;

    const infoElement = document.getElementById('info');
    infoElement.innerHTML = _position;
    infoElement.style.top = y + "px";
    infoElement.style.left = (x + 20) + "px";
}
  

});




