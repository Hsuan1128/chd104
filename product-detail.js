$(function () {
  $(`.small-img`).click(function () {
    let smallImgSrc = $(this).attr("src");
    $("#large-img").attr("src", smallImgSrc);
  });
});
