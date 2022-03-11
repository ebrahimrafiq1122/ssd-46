$(document).ready(function(){

    // banner slide

    $('.sliding-effect').slick({
        slidesToShow:1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true,
    });

    // shot slide

    $('.screen-slide').slick({
        slidesToShow:5,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"0px",
        arrows:false,
        dots:true,
    });

    // video
    new VenoBox();

    // text slide
    $('.text-slides').slick({
        slidesToShow:1,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"0px",
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor:".round_slide",
    });

    // img slides

    $('.round_slide').slick({
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding:"0px",
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor:".text-slides",
        dots:true,
        
    });

    // preload
    $('.preloader').delay(2000).fadeOut();
   
});

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    // back to top

    if(scrolling > 300){
        $('.back-to-top').fadeIn();
    }
    else{
        $('.back-to-top').fadeOut();
    }

    // add or remove class

    if (scrolling > 200) {

      $("#menu_part").addClass('menu_fixed');
    } else {
      $("#menu_part").removeClass('menu_fixed');
    }
});

// click btn go to top
$('.back-to-top').click(function(){
    $('body,html').animate({
        scrollTop : '0px',
    },1500);
});
