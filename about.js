$(document).ready(function () {
  $("#process3").click(function () {
    // 获取要滚动到的元素
    var targetElement = $("#step3");

    // 计算要滚动的垂直位置
    var scrollToPosition = targetElement.offset().top;

    // 使用 animate 方法实现平滑滚动
    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      1000
    ); // 1000 是动画持续时间（以毫秒为单位），可以根据需要调整
  });
});
