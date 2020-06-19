let buttonValue3 = document.getElementById("btn-input3");

buttonValue3.addEventListener("click", function () {
  let regexName = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
  let inputValue = document.getElementById("input3").value;

  if (inputValue.match(regexName)) {
    document.querySelector(
      ".container .row .col-12 #result3"
    ).innerHTML = `Anda menemukan <span style="background-color:yellow">${inputValue}</span> dalam sistem kami`;
  } else {
    document.querySelector(
      ".container .row .col-12 #result3"
    ).innerHTML = `Maaf kata <span style="background-color:red">${inputValue}</span> belum ada dalam sistem kami`;
  }
});
