$(function () {
  // 全部出現
  $(`#all`).click(() => {
    $(`.product-card`).show();
  });
  // 茶類出現
  $(`#tea`).click(() => {
    $(`.tea`).show();
    $(`.milk`).hide();
    $(`.special`).hide();
    $(`.foam`).hide();
  });
  // 鮮奶類出現
  $(`#milk`).click(() => {
    $(`.milk`).show();
    $(`.tea`).hide();
    $(`.special`).hide();
    $(`.foam`).hide();
  });
  // 特調出現
  $(`#special`).click(() => {
    $(`.special`).show();
    $(`.tea`).hide();
    $(`.milk`).hide();
    $(`.foam`).hide();
  });
  // 奶蓋出現
  $(`#foam`).click(() => {
    $(`.foam`).show();
    $(`.tea`).hide();
    $(`.milk`).hide();
    $(`.special`).hide();
  });
});
