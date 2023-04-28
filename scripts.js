const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dollar = 5.3;
const euro = 5.49;

const convertValues = () => {
  const inputReal = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ American Dollar") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dollar);
  } else if (select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (select.value === "US$ American Dollar") {
    currencyName.innerHTML = "American Dollar";
    currencyImg.src = "./assets/usa.png";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
