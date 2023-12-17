$(function () {
  let acc = 123;
  let psw = 123;
  //檢查密碼
  $(`#submit`).click((e) => {
    e.preventDefault();
    let account = $(`#account`).val();
    let password = $(`#password`).val();
    //檢查帳號密碼不可以為空值
    if (account == "") {
      alert("請輸入帳號");
      return;
    } else if (password == "") {
      alert("請輸入密碼");
      return;
    }
    //密碼正確icon出現，手機板出現在nav裡面
    if (account == acc && password == psw) {
      alert("登入成功");
      $(`#id-icon`).css({ display: "block" });
      $(`#hb-member`).css({ display: "flex" });
      $(`#hb-logout`).css({ display: "block" });
    } else {
      alert("密碼錯誤");
    }
  });
  // 電腦版點擊icon開關會員資料燈箱
  $(`#id-icon`).click(() => {
    $(`#member-page`).toggle();
  });
  // 電腦版登出
  $(`#logout`).click(() => {
    location.reload();
  });
  //手機版登出
  $(`#hb-logout`).click(() => {
    location.reload();
  });
});
