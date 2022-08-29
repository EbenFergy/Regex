// password must be six characters or more
// password must contatin characters
// must conain numbers
// must contain upper and lower case letters
const passwordCheck = (password) => {
  const regex =
    /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[\!@#\$%&\^&\*\(\)\-_\+=\\\}\{\]\["';:\/\?><\.,`~]+){6,}/g;
  console.log(regex.test(password));
  return regex.test(password);
};

passwordCheck("d8Dd8D5%");
