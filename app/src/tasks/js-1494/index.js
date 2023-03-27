const input = document.querySelector("#number input");
const customNumber = document.querySelector("#number .custom");
const intlNumber = document.querySelector("#number .intl");

//custom
const customFormattedNumber = e => {
  const value = Number(e.target.value);
  if (value) {
    customNumber.textContent = value.toLocaleString() + " $";
  } else {
    customNumber.textContent = "";
  }
};
//Intl
const intlFormattedNumber = e => {
  const value = Number(e.target.value);
  const formatter = Intl.NumberFormat("ru", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);
  intlNumber.textContent = formatter;
};

input.addEventListener("input", customFormattedNumber);
input.addEventListener("input", intlFormattedNumber);
