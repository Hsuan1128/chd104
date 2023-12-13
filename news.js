$(function () {
  $(`#all`).click(() => {
    $(`.all`).show();
  });
  $(`#discount`).click(() => {
    $(`.discount`).show();
    $(`.activity`).hide();
    $(`.new-item`).hide();
  });
  $(`#new-item`).click(() => {
    $(`.new-item`).show();
    $(`.activity`).hide();
    $(`.discount`).hide();
  });
  $(`#activity`).click(() => {
    $(`.activity`).show();
    $(`.new-item`).hide();
    $(`.discount`).hide();
  });
});
