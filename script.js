console.log("hello world");

// variables

// buttons
const btnEncrypter = document.querySelector("#btn-encrypter");
const btnDecrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");

// inputs
const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");

// divs
const containerNotResult = document.querySelector(".not-result");
const containerResult = document.querySelector(".result");

const regex = /[A-Z]|[-ÿ\u00f1\u00d1]|[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

// utils

const data = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function encrypterText() {
  let newText = inputText.value;

  if (newText.match(regex)) {
    alert("Entrada de texto invalido");
    return;
  }

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    newText = newText.replaceAll(keys[i], data[keys[i]]);
  }

  inputText.value = "";
  outputText.value = newText;

  containerNotResult.style.display = "none";
  containerResult.style.display = "flex";
}

function decryptText() {
  let newText = inputText.value;

  if (newText.match(regex)) {
    alert("Entrada de texto invalido");
    return;
  }

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    newText = newText.replaceAll(data[keys[i]], keys[i]);
  }

  inputText.value = "";
  outputText.value = newText;

  containerNotResult.style.display = "none";
  containerResult.style.display = "flex";
}

// events

btnEncrypter.addEventListener("click", () => encrypterText());

btnDecrypt.addEventListener("click", () => decryptText());

btnCopy.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
});
