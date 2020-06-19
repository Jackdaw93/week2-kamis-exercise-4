let buttonValue2 = document.getElementById("btn-input2");

buttonValue2.addEventListener("click", function () {
  let regexName = /^\d{10,12}$/;
  let inputValue = document.getElementById("input2").value;

  if (inputValue.match(regexName)) {
    document.querySelector(
      ".container .row .col-12 #result2"
    ).innerHTML = `Phone Number is <span style="background-color: yellow;color:blue">${inputValue}</span>`;
  } else {
    document.querySelector(
      ".container .row .col-12 #result2"
    ).innerHTML = `Total digits is <span style="background-color: red;color:white">${inputValue.length}</span> need min 10 and max 12 number`;
  }
});
