$(function () {
  $(`#all`).click(() => {
    $(`.product-card`).show();
  });
  $(`#tea`).click(() => {
    $(`.tea`).show();
    $(`.milk`).hide();
    $(`.special`).hide();
    $(`.foam`).hide();
  });
  $(`#milk`).click(() => {
    $(`.milk`).show();
    $(`.tea`).hide();
    $(`.special`).hide();
    $(`.foam`).hide();
  });
  $(`#special`).click(() => {
    $(`.special`).show();
    $(`.tea`).hide();
    $(`.milk`).hide();
    $(`.foam`).hide();
  });
  $(`#foam`).click(() => {
    $(`.foam`).show();
    $(`.tea`).hide();
    $(`.milk`).hide();
    $(`.special`).hide();
  });
});
