$(function () {
  let acc = 123;
  let psw = 123;

  $(`#submit`).click((e) => {
    e.preventDefault();
    let account = $(`#account`).val();
    let password = $(`#password`).val();
    if (account == acc && password == psw) {
      alert("登入成功");
      $(`#id-icon`).css({ display: "block" });
    } else {
      alert("密碼錯誤");
    }
  });
  $(`#id-icon`).click(() => {
    $(`#member-page`).toggle();
  });
  $(`#logout`).click(() => {
    location.reload();
  });
});
