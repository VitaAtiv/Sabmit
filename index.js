/*

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

*/

const refs = {
  form: document.querySelector(".box"),
};


function onSubmit(event) {
    event.preventDefault();

    /*
    const city = form.querySelector ('[name="city"]')
    const name = form.querySelector('[name="name"]');

    const values = {
      city: city.value,
      name: name.value,
    };

    console.log("variant1", values);
*/
    
    
   /*
    const fields = document.querySelectorAll('input, select, textarea');
    const values = {};

    fields.forEach (field => 
    const {name, value} = field;
        values[name] = value;
         )

    console.log("variant2", values);
*/


    const { city, name } = form;
    const values = {
      city: city.value,
      name: name.value,
    };
console.log("variant3", values);

    // const data = new FormData(event.currentTarget);
    // console.log(data);
    // const validData = {};
    // data.forEach((value, key) => {
    //   console.log(key, value);
    //     validData["val"] = 1;
    //     validData.val = 1;
    // });
}

refs.form.addEventListener("submit", onSubmit);



