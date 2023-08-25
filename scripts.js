const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const convertValues = async () => {
  const inputReal = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((response) => response.json());

  const dollar = data.USDBRL.high;
  const euro = data.EURBRL.high;
  const bitcoin = data.BTCBRL.high;

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ American Dollar")
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dollar);

  if (select.value === "€ Euro")
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);

  if (select.value === "₿ Bitcoin")
    currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputReal / bitcoin);
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-image");

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (select.value === "US$ American Dollar") {
    currencyName.innerHTML = "American Dollar";
    currencyImg.src = "./assets/usa.png";
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  }

  convertValues();
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
