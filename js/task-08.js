const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    const objectDate = {
      email,
      password,
    };
    event.currentTarget.reset();
    return console.log(objectDate);
  }
}
