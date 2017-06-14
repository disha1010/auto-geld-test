$(function() {
  $("body").mouseleave(function() {
    $(".modal").show();
  });
  $(".modal__close").click(function() {
    $(".modal").hide();
  });
});
