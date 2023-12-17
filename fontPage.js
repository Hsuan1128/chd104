//banner slide功能
$(function () {
  let divWidth = $("#slider").width();
  //div寬度
  let imgCount = $("#slider-content li").length;
  //圖片的總長度
  for (let i = 0; i < imgCount; i++) {
    $("#contentButton").append(`<li></li>`);
    //有幾張圖片就要加幾個小圓點
  }
  $("#contentButton li:first").addClass("clicked");
  $("#slider-content li").width(divWidth); // li 的寬度
  $("#slider-content").width(divWidth * imgCount); // ul 的寬度

  let index = 0;
  let timer = setInterval(moveToNext, 3000);

  $("#contentButton li").click(function () {
    clearInterval(timer);
    index = $(this).index();

    $("#slider-content").animate({
      left: divWidth * index * -1,
    });
    //點擊黑點變綠點
    $(this).addClass("clicked");

    $("#contentButton li").not(this).removeClass("clicked");

    timer = setInterval(moveToNext, 3000);
  });

  function moveToNext() {
    if (index < imgCount - 1) {
      index++;
    } else {
      index = 0;
    }

    $("#slider-content").animate({
      left: divWidth * index * -1,
    });

    $(`#contentButton li:eq(${index})`).addClass("clicked");
    $("#contentButton li").not(`:eq(${index})`).removeClass("clicked");
  }
});
//推薦slider
$(function () {
  let saleCard = $(`.card-slide`);
  let curIndex = 0;
  $(`#left`).click(function () {
    curIndex--;
    saleCard.css({ left: -curIndex * 210 });
    if (curIndex === 0) {
      $(`#left`).attr("disabled", true);
    } else {
      $(`#right`).attr("disabled", false);
    }
  });

  $(`#right`).click(function () {
    curIndex++;
    saleCard.css({ left: -curIndex * 210 });
    $(`#left`).attr("disabled", false);
    if (curIndex === 3) {
      $(`#right`).attr("disabled", true);
    } else {
      $(`#left`).attr("disabled", false);
    }
  });
});
