const passwordCheck = (password) => {
  const regex =
    /(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)(?=.*[\!@#\$%&\^&\*\(\)\-_\+=\\\}\{\]\["';:\/\?><\.,`~]+)/g;
  return regex.test(password);
};
