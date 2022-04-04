const elInputName = document.querySelector("[name=imie]");
const elInputSurname = document.querySelector("[name=nazwisko]");
const elInputMail = document.querySelector("[name=email]");
const elButtonShowOutput = document.querySelector("button");
const elOutputMail = document.querySelector(".mail");
const elOutputFullName = document.querySelector(".name");
const mailValidationRegex = new RegExp("^[\\w]+(?:\\.[\\w]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");

const validateEmail = (mail) => {
  return "Twój adres mailowy jest " + (mail.match(mailValidationRegex) ? "poprawny" : "błędny");
};

const handleBlur = (event) => {
  const isMailValid = validateEmail(event.target.value);
  elOutputMail.innerHTML = `${event.target.value} | ${isMailValid}`;
};

const handleClick = () => {
  elOutputFullName.innerHTML = `${elInputName.value} ${elInputSurname.value}`;
};

elInputMail.addEventListener("blur", handleBlur);
elButtonShowOutput.addEventListener("click", handleClick);
