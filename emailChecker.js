// Email can contain numbers
// Email must have a defined pattern of "varchar@varchar.varchar"
// Must not have a period sign "." immediately before or after the "@" symbol
// Cannot begin with a period "."
// Cannot end with a period "."
const emailCheck = (email) => {
  const regex =
    /(^[a-z])([a-zA-Z0-9]{1,64}@[a-zA-Z0-9]+\.[a-zA-Z0-9]+)([a-zA-Z]$)/g;
  console.log(regex.test(email));
  return regex.test(email);
};

emailCheck("ebenez90erosas@yahoo.com");
