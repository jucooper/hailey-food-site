$(document).ready(function () {
  $("#menu-link").click(function () {
    var aTag = $("#menu-anchor");
    $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
  });

  $("#contact-link").click(function () {
    var aTag = $("#contact-anchor");
    $("html,body").animate({ scrollTop: aTag.offset().top }, "slow");
  });

  $(".photos").gallerify();

  $(".photos").append('<img src="./images/1.jpg">');
  $(".photos").append('<img src="./images/2.jpg">');
  $(".photos").append('<img src="./images/3.jpg">');
  $(".photos").append('<img src="./images/4.jpg">');
  $(".photos").append('<img src="./images/5.jpg">');
  $(".photos").append('<img src="./images/6.jpg">');
  $(".photos").append('<img src="./images/7.jpg">');

  $(".photos").gallerify.renderAsyncImages();
});
