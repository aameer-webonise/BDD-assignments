function isValidUserEmail(userEmail)
{
  var emailPatt = new RegExp("^[a-zA-Z]+[A-Za-z0-9+_.-]+@([a-zA-Z]+)([.]+)([a-zA-Z]+)$");
  return emailPatt.test(userEmail);
}

function isValidUserPassword(userPassword)
{
  //var passwordPatt=new RegExp("^([a-zA-Z0-9]+[_!-.@#$%^&\\s]+[a-zA-Z0-9]*)+$");
var passwordPatt=new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!.@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]+$/);  
return passwordPatt.test(userPassword);
}
