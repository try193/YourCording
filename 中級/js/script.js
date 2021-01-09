// ヘッダーのスムーススクロール
$(function(){
  $("a[href^='#']:not([href='#])").click(function(){

    var target=$($(this).attr("href")).offset().top;

    if (window.matchMedia( '(max-width: 720px)' ).matches){
      target-=80;
    }
    else if (window.matchMedia( '(max-width: 420px)' ).matches){
      target-=70;
    }

    $("html, body").animate({scrollTop:target},500);

    return faluse;
  });
});

// 質問アコーディオン
$(function(){
  $(".qa__answer:not(:first)").css("display", "none");

  $(".qa__question").click(function(){
    if(!$(this).hasClass("open")){
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
    }

  });

  return false;
});

// スクロールアニメーション
AOS.init()

// swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView:1,
  breakpoints:{
    721: {
      slidesPerView: 3,
    },
  },
  spaceBetween:40,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

// ajax
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScm9KvWQBVXu2HJLDO1agaqz7PmcTBg34fGmSelwmY8FGOe1Q/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".contact__end-message").slideDown();
          $(".contact__submit").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".contact__false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

// ハンバーガーメニュー
$(function(){

  var dis=450;

  $(".header__burger-btn").click(function(){

    $(".header__nav").animate({"margin-top":"+=" + dis + "px"},200);

    dis*=-1;

  });
});