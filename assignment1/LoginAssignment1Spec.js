describe("Email Validation", function() 
{
	it("Email should have @",function(){		
		expect(validateEmail("aameer9@gmail.com")).toBeTruthy();
		expect(validateEmail("aameer9gmail.com")).toBeFalsy();
	});
});

describe("Password Validation", function() 
{
	it("Password should be having one alphabet, number and a special character.",function(){		
		expect(validatePassword("aameer9@")).toBeTruthy();
		expect(validatePassword("aa8_me")).toBeTruthy();
		expect(validatePassword("aa8me")).toBeFalsy();
	});
});
