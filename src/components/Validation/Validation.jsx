export default function validation(input) {
  const regexEmail = /\s+@\s+\.\s+/;
  const regexPass = new RegExp("[0-9]");
  const errors = {};

  if (regexEmail.test(input.username)) {
    errors.username = "Nombre debe ser un email válido!";
  }

  if (!input.username) {
    errors.username = "El nombre es obligatorio!";
  }

  if (input.username.length > 35) {
    errors.username = "El nombre es obligatorio!";
  }

  if (!regexPass.test(input.password)) {
    errors.password = "Al menos un numero!";
  }

  if (input.password.length < 6 || input.password.length > 10) {
    errors.username = "Debe tener entre 6 y 10 caracteres";
  }

  return errors;
}
