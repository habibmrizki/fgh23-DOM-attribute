function tooglePassword() {
  const pwdInput = document.getElementById("pwd");
  if (pwdInput.type === "password") {
    pwdInput.type = "text";
    return;
  }
  pwdInput.type = "password";
}

function randomizeColor() {
  function randomizer() {
    const number = Math.floor(Math.random() * 225);
    return number;
  }

  const container = document.querySelector(".container");
  const newColor = `rgb(${randomizer()},  ${randomizer()},  ${randomizer()})`;
  container.style.background = newColor;
}

function modifyText() {
  const textInput = document.querySelector("section textarea");
  const paragraph = document.querySelector(".container > p");
  //   jika menggunakan inner html, sertakan bentuk sanitasi htmlnya
  // paragraph.innerHTML = textInput.value
  // gunakan node.textContent jika hanya membutuhkan perubahan text
  paragraph.textContent = textInput.value;
}

function addEmptyList() {
  const numInput = document.querySelector(
    ".container > div > input[type=number]"
  );
  const emptyListAmount = numInput.value;

  const ul = document.querySelector(".container > ul");
  const arrLi = [];
  for (let i = 0; i < emptyListAmount; i++) {
    const li = document.createElement("li");
    arrLi.push(li);
    //ul.append(li)
    //ul.appendChild(li)
  }
  ul.append(...arrLi);
}

function resetEmptyList() {
  // node.removeChild(child)
  const ul = document.querySelector(".container > ul");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const li = document.createElement("li");
  li.textContent = "default";
  ul.appendChild(li);
}

function insert(options) {
  const text = "Inserted Text";
  const p = document.querySelector(".text");

  p.insertAdjacentElement(options, text);
}
