$(function() {


$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});
$(".toggle-mnu").click(function(e) {
  e.preventDefault();
  $(".drop-down-menu").toggleClass('active');
});

$(".slick-prev").click(function(e) {
   e.preventDefault();
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$(".slick-next").click(function(e) {
   e.preventDefault();
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');

});
$("#slick-slide-control01").click(function(e) {
   e.preventDefault();
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');
});
$("#slick-slide-control01").click(function(e) {
   e.preventDefault();
  $(".slick-next").addClass('bg-white');
  $(".slick-prev").removeClass('bg-white');
});
$("#slick-slide-control00").click(function(e) {
   e.preventDefault();
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$("#slick-slide-control00").click(function(e) {
   e.preventDefault();
  $(".slick-prev").addClass('bg-white');
  $(".slick-next").removeClass('bg-white');
});
$(".close").click(function(e) {
   e.preventDefault();
  $(".pop-up-slider").addClass('hidden');
});

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

});
