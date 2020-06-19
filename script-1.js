let buttonValue = document.getElementById("btn-input");

buttonValue.addEventListener("click", function () {
  let regexName = /[A-Z]/;
  let inputValue = document.getElementById("input").value;

  if (inputValue[0].match(regexName)) {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Huruf pertama ${inputValue} adalah huruf besar`;
  } else {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Huruf pertama ${inputValue} adalah huruf kecil`;
  }
});
