const refs = {
  form: document.querySelector(".box"),
};

function onSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  console.log(data);
  const validData = {};
  data.forEach((value, key) => {
    console.log(key, value);
    validData[key] = value;
  });
  console.log(validData);
}

refs.form.addEventListener("submit", onSubmit);






const inputEl = document.querySelector(".inputEmail");
const textEl = document.querySelector(".textEmail");
console.log(inputEl);
console.log(textEl);

// подія change
inputEl.addEventListener("change", onChange);

function onChange(event) {
  console.log(event);
}

// подія input
inputEl.addEventListener("input", onInput);
function onInput(event) {
  // через length

  // const text = event.target.value;
  // console.log(text.length);
  // if (text.length === 0) {
  //   textEl.textContent = "Nothing";
  //   return
  // }
  // textEl.textContent = text;

  // через оператор або

  const text = event.target.value || "Nothing";
  const inValid = !inputEl.classList.contains("not-valid")

  if (text.length < 5 && inValid) {
    inputEl.classList.add("not-valid");
    console.log("!");
  } else if (text.length >= 5 &&  !inValid) {
    inputEl.classList.remove("not-valid");
    console.log("-");
  }
  textEl.textContent = text;
  // через тернарну функцію

  // const text = event.target.value.length === 0 ? "Nothing" : event.target.value;
  // textEl.textContent = text;
}


// перевірка чи є у інпут якісь символи окрім англ.

function onInput(event) {
  const text = event.target.value;
  const nonEnglishRegex = /[^A-Za-z]/;
  const isNotValidEngl = nonEnglishRegex.test(text);
  if (isNotValidEngl) {
    inputEl.classList.add("not-valid");
  }

  // чи є пробіл у строці, чи ввдедене тільки одне слово
  // const txt = "Words"; // false
  // const txt2 = "Wor ds"; // true
  // console.log(txt.includes(" "));
  // console.log(txt2.includes(" "));
}


const inputRange = document.querySelector(".textSize");
const textRange = document.querySelector(".textRange");
console.log(inputRange);
console.log(textRange);


inputRange.addEventListener("input", onRange)
function onRange(event) {

  console.log(event.target.value);
  textRange.style.fontSize = `${event.target.value}px`;
}


