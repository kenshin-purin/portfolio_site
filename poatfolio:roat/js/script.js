function loaded() {
  document.getElementById("loading").classList.remove("active")
}

window.addEventListener("load", function() {
  setTimeout(loaded,1000)
})
//ローディング後1秒ごにクラス除去
setTimeout(loaded,5000)
//何があっても5秒ごにクラス除去

//ハンバーガーボタンの実装
//.hamu_btnをクリック時に発動
$(".l-hamubtn").click(function () {
  $(this).toggleClass('active');//クリックしたら、（'~'）クラス追加する
  $(".l-nav").toggleClass('panelactive');//クリックしたら、（'~'）クラス追加する
});
//.navのaタグをクリック時に発動
$(".l-nav a").click(function () {
  $(".l-hamubtn").removeClass('active');//クリックしたら、（'~'）クラス除外する
  $(".l-nav").removeClass('panelactive');;//クリックしたら、（'~'）クラス除外する
});
// ここまでがハンバーガーメニュー
jQuery(function() {
  var appear = false;
  var pagetop = $('.c-top__btn');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '10px' //下から10pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-300px' //下から-100pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});
//ここまでtopボタン


$(window).scroll(function () {
  $(".js-clear").each(function () {
      var targetElement =   $(this).offset().top;
      var scroll =$(window).scrollTop();
      var windowHeight =$(window).height();

      if (scroll > targetElement - windowHeight + 180 ) {
          $(this).addClass('js-scroll__clear')
      };
  });

  $(".js-fadein").each(function () {
    var targetElement =   $(this).offset().top;
    var scroll =$(window).scrollTop();
    var windowHeight =$(window).height();

    if (scroll > targetElement - windowHeight + 180 ) {
        $(this).addClass('js-scroll__fadein')
    };
  });

  $(".js-line").each(function () {
    var targetElement =   $(this).offset().top;
    var scroll =$(window).scrollTop();
    var windowHeight =$(window).height();

    if (scroll > targetElement - windowHeight + 180 ) {
        $(this).addClass('js-scroll__line')
    };
  });

});

$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});
$(document).ready(function(){
  $('html,body').animate({ scrollTop: 0 }, '1');
});

