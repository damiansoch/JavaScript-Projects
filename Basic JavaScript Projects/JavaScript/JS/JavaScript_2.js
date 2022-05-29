function formSubmit() {
  let message = "";
  let nameSubmit = document.forms["myForm"]["name"].value;
  let surnameSubmit = document.forms["myForm"]["surname"].value;
  let emailSubmit = document.forms["myForm"]["email"].value;
  let messageSubmit = document.forms["myForm"]["message"].value;
  if (
    nameSubmit == "" ||
    surnameSubmit == "" ||
    emailSubmit == "" ||
    messageSubmit == ""
  ) {
    message += `All fields needs to be filled in `;
    alert(message);
  }
}
