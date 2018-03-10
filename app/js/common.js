
$(function() {


// navigation

// drop-down-menu
$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});
$(".toggle-mnu").click(function() {
  $(".drop-down-menu").toggleClass('active');
});

// sliders

$('.slick-slider').slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
  
});
$('.slick-slider-product').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
  
});

$('.slick-slider-dignity').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
$(".slick-prev").click(function() {
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$(".slick-next").click(function() {
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');

});
$("#slick-slide-control01").click(function() {
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');
});
$("#slick-slide-control01").click(function() {
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');
});
$("#slick-slide-control00").click(function() {
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$("#slick-slide-control00").click(function() {
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$(".close").click(function() {
  $(".pop-up-slider").addClass('hidden');
});

$('.slider-comments').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
  
});
$('.slider-gifts').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  
});
// sliders end

});




// navigation
;(function(){

// var navigation = document.getElementById('nav_Mn');
var selectTarget;
var dropMenu = document.getElementsByClassName('drop-down-menu')[0];
var dropMenuA = document.getElementsByClassName('toggle-mnu')[0];
  
  function modifClass(){
      dropMenu.classList.remove('active');
      dropMenuA.classList.remove('on');
  };

  function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

  document.onclick = function(event){
    var target = event.target;
        switch(target.className.split(' ')[0]){
        case 'nav_magforms':
          window.scrollTo(0,0);
          modifClass();
          break;
        case 'nav_catalog':
          window.scrollTo(0,3670);
          modifClass();
          break;
        case 'nav_rewards':
          window.scrollTo(0,4800);
          modifClass();
          break;
        case 'nav_reviews':
          window.scrollTo(0,5600);
          modifClass();
          break;
        case 'nav_delivery':
          window.scrollTo(0,6300);
          modifClass();
          break;
        case 'nav_basket':
          window.scrollTo(0,9600);
          modifClass();
          break;
        case 'nav_contacts':
          window.scrollTo(0,10500);
          modifClass();
          break;
      }   
        if(selectTarget) {
          selectTarget.classList.remove('active');
        }
        selectTarget = target;
        selectTarget.classList.add('active');
        
        
        console.log(getCoords(target));
        
        
    
    return false;
  }


  
}());

