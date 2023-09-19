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

   // Gallery image hover
   $(".img-wrapper").hover(
    function () {
        $(this).find(".img-overlay").animate({
            opacity: 1
        }, 600);
    },
    function () {
        $(this).find(".img-overlay").animate({
            opacity: 0
        }, 600);
    }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>');
var $exitButton = $('<div id="exitButton"> <i class="fa fa-times" aria-hidden="true"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).prev().attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function () {
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".plac-gal-imag").next().find("img"));
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) {
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".plac-gal-imag").prev().find("img"));
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    event.stopPropagation();
});

$exitButton.click(function () {
    $("#overlay").fadeOut("slow");
});
  



});


/*$(document).mousemove(function(event){
    var _x = event.pageX + "px";
    var _y = event.pageY + "px";
    $(".corsor").css({'transform' : 'translate(' + _x +', ' + _y + ')'});
   
    
});*/
