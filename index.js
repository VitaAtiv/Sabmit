const refs = {
    form: document.querySelector(".loginForm"),
}
console.log(refs);
refs.form.addEventListener("submit", onSubmit)

function onSubmit(event) {
    event.preventDefault();


    console.log(event.currentTarget.login.value);
    console.log(event.currentTarget.gender);
    
    // console.log(event.currentTarget.gender.value);
    // const login = event.currentTarget.login.value;
    // const gender = event.currentTarget.gender.value;
    // const data = {
    //   login,
    //   gender,
    // };

    const data = new FormData(event.currentTarget);
    console.log(data);
    const validData = {};
    data.forEach((value, key) => {
        console.log(key, value);
        validData["val"] = 1;
    });
}