// $(function () {
//   let acc = 123;
//   let psw = 123;

//   $(`#submit`).click(() => {
//     let account = $(`#account`).val();
//     let password = $(`#password`).val();
//     if (account == acc && password == psw) {
//       $(`.id-icon`).css({ display: "block" });
//     } else {
//       alert("error");
//     }
//   });
// });

let acc = 123;
let psw = 123;
let sub = document.querySelector("#submit");
sub.addEventListener("click", (event) => {
  event.preventDefault(); // 阻止表单的默认行为
  let account = document.querySelector("#account").value;
  let password = document.querySelector("#password").value;
  let idIcon = document.querySelector("#id-icon");
  console.log(idIcon);
  if (account == acc && password == psw) {
    idIcon.style.display = "block";
    alert("ok");
  } else {
    alert("error");
  }
});
