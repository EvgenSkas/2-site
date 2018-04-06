
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


var selectTarget;
var mgs = document.getElementById('mgs');
var dropMenu = document.getElementsByClassName('drop-down-menu')[0];
var dropMenuA = document.getElementsByClassName('toggle-mnu')[0];
var catalog = document.getElementById('catalog');
var catalogCoords = catalog.getBoundingClientRect();
var rewards = document.getElementById('rewards');
var rewardsCoords = rewards.getBoundingClientRect();
var mainComments = document.getElementById('main_comments');
var mainCommentsCoords = mainComments.getBoundingClientRect();
var mainDelivery = document.getElementById('main_delivery');
var mainDeliveryCoords = mainDelivery.getBoundingClientRect();
var mainBasket = document.getElementById('basket');
var mainBasketCoords = mainBasket.getBoundingClientRect();
var mainContacts = document.getElementById('contacts');
var mainContactsCoords = mainContacts.getBoundingClientRect();
  
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
        case 'mgfs':
        case 'nav_magforms':
          window.scrollTo(0,0);
          modifClass();
          break;
        case 'nav_catalog':
          window.scrollTo(0,catalogCoords.top-50);
          modifClass();
          break;
        case 'nav_rewards':
          window.scrollTo(0,rewardsCoords.top-50);
          modifClass();
          break;
        case 'nav_reviews':
          window.scrollTo(0,mainCommentsCoords.top-50);
          modifClass();
          break;
        case 'nav_delivery':
          window.scrollTo(0,mainDeliveryCoords.top-50);
          modifClass();
          break;
        case 'basket':
        case 'nav_basket':
          window.scrollTo(0,mainBasketCoords.top);
          modifClass();
          break;
        case 'nav_contacts':
          window.scrollTo(0,mainContactsCoords.top-50);
          modifClass();
          break;
      }   
        if(selectTarget) {
          selectTarget.classList.remove('active');
        }
        selectTarget = target;
        selectTarget.classList.add('active');
    return false;
  }

//cart
var rainbow = {
  name: 'RAINBOW 14PC SET',
  price: 1170000
};
var creative = {
  name: 'Creative 90',
  price: 2170000
};
var unique = {
  name: 'UNIQUE 30PC SET',
  price: 2140000
};



var cartRaibow = document.getElementById('cartRainbow');
var tableCart = document.getElementById('tableCart');
var tableCartBody = tableCart.children[1];
var cart = document.getElementById('cart');
var span = document.createElement('span');
var span1 = document.createElement('span');
var cartMnDrop = document.getElementById('cartMnDrop');
var cartMn = document.getElementById('cartMn');
var selectOpt = document.getElementsByClassName('selectOpt');
var total = document.getElementById('total');
var totalSum = 0;

var count = 0;




document.addEventListener('click', function(e){
  var index = e.target.className.slice(' ').indexOf('productItem');
  if(index === -1) return false;
  var nameObj = e.target.parentNode.getElementsByTagName('h3')[0].innerHTML;
  var spanPrice = e.target.parentNode.getElementsByTagName('span')[0];
  var priceObj = parseInt(spanPrice.innerHTML.split(' ').join(''));
  var obj = {
    name: nameObj,
    price: priceObj
  }

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  cart.appendChild(span);
  span.classList.add('positionCart');
  span.innerHTML = ++count;
  span1.innerHTML = '(' + count + ')';
  cartMn.appendChild(span1);
  cartMnDrop.appendChild(span1);
  
  
  tr.innerHTML = '<td>\
                    <a>' +   obj.name + '</a>\
                  </td>\
                  <td>\
                    <span>' +   obj.price + '</span>\
                  </td>\
                  <td>\
                    <div class="new-select-style-wpandyou">\
                      <select name="cart" class="selectOpt">\
                        <option value="1">1</option>\
                        <option value="2">2</option>\
                        <option value="3">3</option>\
                        <option value="4">4</option>\
                      </select>\
                    </div>\
                  </td>\
                  <td class="sumTr">' +   obj.price + '</td>\
                  <td>\
                    <div id="cartDel" class="cart-icon2">1</div>\
                  </td>';
  tableCartBody.appendChild(tr);
  totalSum +=   obj.price;
  total.innerHTML = totalSum + ' BYR';

     tableCartBody.addEventListener('click', function(e) {
      var targetCart = e.target;
        if(targetCart.className == 'selectOpt'){
            var selectOptClick = targetCart;
            var trSelect = selectOptClick.closest('tr');
            var tdSpan = trSelect.getElementsByTagName('span')[0];
            var tdSum = trSelect.getElementsByClassName('sumTr')[0];
            selectOptClick.addEventListener('click', function(){
              for(var i = 0; i < selectOptClick.options.length; i++){
                var option = selectOptClick.options[i];
                  if(option.selected){
                  var value = option.value;
                 }
              }
              tdSum.innerHTML = +tdSpan.innerHTML * value;
              var colTdSum = tableCartBody.getElementsByClassName('sumTr');
              var totalSumSelect = 0;
              for(var i = 0; i < colTdSum.length; i++){
                 totalSumSelect += +colTdSum[i].innerHTML;
              }
              totalSum = totalSumSelect;
              total.innerHTML = totalSum + ' BYR';    
            }) 
        }

        if(targetCart.className == 'cart-icon2'){
          var tr = targetCart.closest('tr');
          tableCartBody.removeChild(tr);
          span.innerHTML = --count;
          span1.innerHTML = '(' + count + ')';
          colTdSum = tableCartBody.getElementsByClassName('sumTr');
          var totalSumSelect = 0;
          for(var i = 0; i < colTdSum.length; i++){
             totalSumSelect += +colTdSum[i].innerHTML;
          }
          totalSum = totalSumSelect;
          total.innerHTML = totalSum + ' BYR';
            
          return;
        }

      return false;
    })
  })

 


}());

