export default function validate(credentials, isReset, newUser) {
  let errors = {};

  // Checking if email is not empty
  if (!credentials.email) {
    errors.emailIsEmpty = "Вам необходимо ввести Ваш e-mail адрес.";
  }
  // Checking if email format is valid
  if (credentials.email && !/\S+@\S+\.\S+/.test(credentials.email)) {
    errors.emailFormatInvalid = "Неверный формат e-mail адреса.";
  }

  // Don't check password if user is resetting password
  // console.log()
  if (!isReset || newUser) {
    // Checking if password is not empty
    if (!credentials.password) {
      errors.passIsEmpty = "Вам необходимо ввести пароль.";
    }
    // Checking if password is strong enough
    // let strengthCheck = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,250}$/;
    // if (credentials.password && !credentials.password.match(strengthCheck))
    //   errors.passIsStrong = "You need a stronger password";
  }

  return errors;
}
