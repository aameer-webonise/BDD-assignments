describe("Email Validation", function() 
{
	it("Email should have @",function(){		
		expect(validateEmail("aameer9@gmail.com")).toBeTruthy();
		expect(validateEmail("aameer9gmail.com")).toBeFalsy();
	});

	it("Email should contain special symbols out of these (_.-)",function(){		
		expect(validateEmail("aameer.ausekar@gmail.com")).toBeTruthy();
		expect(validateEmail("aameer-ausekar@gmail.com")).toBeTruthy();
		expect(validateEmail("aameer_ausekar@gmail.com")).toBeTruthy();
		expect(validateEmail("aameer#ausekargmail.com")).toBeFalsy();
		expect(validateEmail("aameer^%gmail.com")).toBeFalsy();
		expect(validateEmail("aam!*er#ausekargmail.com")).toBeFalsy();
	});
});

describe("Password Validation", function() 
{
	it("Password should be having at least one alphabet",function(){		
		expect(validatePassword("aameer9@")).toBeTruthy();
		expect(validatePassword("7-")).toBeFalsy();
		expect(validatePassword("954#")).toBeFalsy();
	});

	it("Password should be having at least one number",function(){		
		expect(validatePassword("aameer9@")).toBeTruthy();
		expect(validatePassword("john6%")).toBeTruthy();
		expect(validatePassword("mack")).toBeFalsy();
	});

	it("Password should be having at least one special symbol out of these (!.@#$%^&*()_)",function(){		
		expect(validatePassword("aameer9@")).toBeTruthy();
		expect(validatePassword("kitty$9")).toBeTruthy();
		expect(validatePassword("mack8")).toBeFalsy();
	});
});
