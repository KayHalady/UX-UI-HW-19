$(document).ready(function () {
  console.log('DOCUMENT IS READY TO BE MANIPULATED');
  $("li.hoverwork").click(function () {
      $('html, body').animate({
          scrollTop: $("div.myworkanchor").offset().top
      }, 1000);
  });
});