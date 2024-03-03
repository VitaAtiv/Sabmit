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
console.log(inputEl.classList.contains(".not-valid"));
  if (text.length < 5) {
    inputEl.classList.add("not-valid");
  } else {
    inputEl.classList.remove("not-valid");
  }
  textEl.textContent = text;
  // через тернарну функцію

  // const text = event.target.value.length === 0 ? "Nothing" : event.target.value;
  // textEl.textContent = text;
}
