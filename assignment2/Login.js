var emailRegularExpression = new RegExp("^[a-zA-Z]+[A-Za-z0-9+_.-]+@([a-zA-Z]+)([.]+)([a-zA-Z]+)$");
var passwordRegularExpression=new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!.@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);  

function isValidUserEmail(userEmail)
{
 
  return emailPatt.test(userEmail);
}

function isValidUserPassword(userPassword)
{

return passwordPatt.test(userPassword);
}
