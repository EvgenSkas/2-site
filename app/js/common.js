
$(function(){
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
      }
    ]
  });

  // sliders end
  //--------POPUP-------------------------


  $(".popup-mn").magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });

/*  $("#callback").submit(function() {
      $.ajax({
        type: "GET",
        url: "mail.php",
        data: $("#callback").serialize()
      }).done(function() {
        alert("Спасибо за заявку!");
        setTimeout(function() {
          $.fancybox.close();
        }, 1000);
      });
      return false;
    });*/
  $(".btn").click(function(){
    
  });
}());

// navigation


(function() {
  var selectTarget;
  var dropMenu = document.getElementsByClassName('drop-down-menu')[0];
  var banner = document.getElementsByClassName('banner')[0];
  var dropMenuA = document.getElementsByClassName('toggle-mnu')[0];
  var advantage = document.getElementsByClassName('advantage')[0];
  var catalog = document.getElementById('catalog');
  var rewards = document.getElementById('rewards');
  var mainComments = document.getElementById('main_comments');
  var mainDelivery = document.getElementById('main_delivery');
  var mainBasket = document.getElementById('basket');
  var mainContacts = document.getElementById('contacts');
    
  function modifClass(){
    dropMenu.classList.remove('active');
    dropMenuA.classList.remove('on');
  };

  function raf(fn) {
    window.requestAnimationFrame(function() {
       window.requestAnimationFrame(function(){
        fn();
       }
      )
    })
  }

  document.onclick = function(event){
    var target = event.target;
        switch(target.className.split(' ')[0]){
        case 'top':
        case 'mgfs':
        case 'nav_magforms':
          banner.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'arrow-down':
          advantage.scrollIntoView({block: "start", behavior: "smooth"});
          break;
        case 'nav_catalog':
          catalog.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'nav_rewards':
          rewards.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'nav_reviews':
          mainComments.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'nav_delivery':
          mainDelivery.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'basket':
        case 'nav_basket':
          mainBasket.scrollIntoView({block: "start", behavior: "smooth"});
          modifClass();
          break;
        case 'nav_contacts':
          mainContacts.scrollIntoView({block: "start", behavior: "smooth"});
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
  var hideBlockCart = document.getElementById('hideBlockCart');
  var hideBlockCartSpan = hideBlockCart.getElementsByTagName('span')[0];
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
    hideBlockCartSpan.innerHTML = obj.name;
    var handler = function(){
        hideBlockCart.classList.remove('show');
        hideBlockCart.style.display = 'none';
        hideBlockCart.removeEventListener('transitionend', handler);
      };

    hideBlockCart.style.display = 'block';
    hideBlockCart.classList.add('show');
    raf(function(){
       hideBlockCart.classList.remove('show');
    })

    hideBlockCart.addEventListener('transitionend', handler)

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
        if(tr.parentNode === null) return false; 
        tr.parentNode.removeChild(tr);
        span.innerHTML = --count;
        span1.innerHTML = '(' + count + ')';
        colTdSum = tableCartBody.getElementsByClassName('sumTr');
        var totalSumSelect = 0;
        for(var i = 0; i < colTdSum.length; i++){
           totalSumSelect += +colTdSum[i].innerHTML;
        }
        totalSum = totalSumSelect;
        total.innerHTML = totalSum + ' BYR';
          
        return false;
      }

        return false;
    })
  })

//form validation

  var feedback = document.querySelector('.feedback');
  var feedbackRequired = feedback.querySelectorAll('[data-valid="required"]');
  var hiddenForm = document.getElementById('callback');
  var hiddenFormRequired = hiddenForm.querySelectorAll('[data-valid="required"]');
  
  var hideBlockCartForm = document.querySelector('#hideBlockCartForm');


  var validation = (function(){
    var object = {};
  
    object.isName = function(name) {
      var re = /\D/;
      return re.test(name);
    }
  
    object.isMail = function(email) {
      var re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      return re.test(email);
    }
    object.isPhone = function(phone) {
      var re = /^\d{12}$/;
      return re.test(phone);
    }
    object.isNotEmpty = function(str) {
      return !!str;
    }
    return object;
  }());

  function isValid(formAttrReq, form){
    var tooltip = form.querySelector('.tooltip');
    var phoneForm = form.querySelector('[data-phone]');
    var emailForm = form.querySelector('[data-email]');

    if(!isAllCompleted(formAttrReq)) {
      tooltip.style.display = 'block';
      tooltip.innerHTML = 'Вам необходимо заполнить все поля!';
      return false;
    } else if(!validation.isPhone(phoneForm.value)) {
      phoneForm.style.backgroundColor = '#FCB2B2';
      tooltip.style.display = 'block';
      tooltip.innerHTML = 'Вы неверно ввели томер телефона!';
      return false;
    } else if(!validation.isMail(emailForm.value)) {
      phoneForm.style.backgroundColor = 'transparent';
      emailForm.style.backgroundColor = '#FCB2B2';
      tooltip.style.display = 'block';
      tooltip.innerHTML = 'Вы неверно ввели email!';
      return false;
    } 
    emailForm.style.backgroundColor = 'transparent';
    tooltip.style.display = 'none';
    return true;
  }
  function isAllCompleted(data) {
    var result = true;
    for( var i = 0; i < data.length; i++) {
      if(!validation.isNotEmpty(data[i].value)){
        result = false;
        break;
      }
    }
    return result;
  }
  
  feedback.addEventListener('click', function(e){
       var target = e.target;
       if((target.className === 'btn') && isValid(feedbackRequired, feedback)){
        
        var handler = function(){
          hideBlockCartForm.classList.remove('show');
          hideBlockCartForm.style.display = 'none';
          hideBlockCartForm.removeEventListener('transitionend', handler);
        };

        hideBlockCartForm.style.display = 'block';
        hideBlockCartForm.classList.add('show');
        raf(function(){
           hideBlockCartForm.classList.remove('show');
        })

        hideBlockCartForm.addEventListener('transitionend', handler);
         for( var i = 0; i < feedbackRequired.length; i++) {
          feedbackRequired[i].value = '';
          feedbackRequired[i].style.backgroundColor = 'transparent';
          }
     }
       return false;
  })

  hiddenForm.addEventListener('click', function(e){
     var target = e.target;
     if((target.className.indexOf('btn') >= 0) && isValid(hiddenFormRequired, hiddenForm)){
      $.magnificPopup.close();
      var handler = function(){
        hideBlockCartForm.classList.remove('show');
        hideBlockCartForm.style.display = 'none';
        hideBlockCartForm.removeEventListener('transitionend', handler);
      };

      hideBlockCartForm.style.display = 'block';
      hideBlockCartForm.classList.add('show');
      raf(function(){
         hideBlockCartForm.classList.remove('show');
      })

      hideBlockCartForm.addEventListener('transitionend', handler);
       for( var i = 0; i < hiddenFormRequired.length; i++) {
        hiddenFormRequired[i].value = '';
        hiddenFormRequired[i].style.backgroundColor = 'transparent';
        }

   }
     return false;
  })

}());






