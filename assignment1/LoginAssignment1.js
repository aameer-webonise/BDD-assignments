var emailRegularExpression = new RegExp("^[a-zA-Z]+[A-Za-z0-9+_.-]+@([a-zA-Z]+)([.]+)([a-zA-Z]+)$");
 var passwordPatt=new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);  
function validateEmail(email)
{
  return emailPatt.test(email);
}

function validatePassword(password)
{
   return passwordPatt.test(password);
}
