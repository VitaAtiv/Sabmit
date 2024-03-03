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
console.log(inputEl);

// подія change
inputEl.addEventListener("change", onChange);

function onChange(event) {
  console.log(event);
}

// подія input
inputEl.addEventListener("input", onInput);
function onInput(event) {
  console.log(event);
}