const nameInput = document.querySelector("[name=imie]");
const surnameInput = document.querySelector("[name=nazwisko]");
const mailInput = document.querySelector("[name=email]");
const button = document.querySelector("button");
const mailOutput = document.querySelector(".mail");
const nameOutput = document.querySelector(".name");
// RFC 5322 Standard Format | short version
const regex = new RegExp("^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$");

const validateEmail = (mail) => {
  if (regex.test(mail)) {
    return "Twój adres mailowy jest poprawny";
  }
  return "Twój adres mailowy jest błędny";
};

const handleBlur = (event) => {
  const isMailValid = validateEmail(event.target.value);
  mailOutput.innerHTML = `${event.target.value} | ${isMailValid}`;
};

const handleClick = (event) => {
  nameOutput.innerHTML = `${nameInput.value} ${surnameInput.value}`;
};

mailInput.addEventListener("blur", handleBlur);
button.addEventListener("click", handleClick);
