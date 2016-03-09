describe("Email & Password Validation", function() 
{

 beforeEach(function () {
        jasmine.addMatchers({
            isValidEmail: function () 
  		{
                return {
                    compare: function (actual) {
                        return {
                            pass: isValidUserEmail(actual)
                        };
                    }
                };
            }
        });

 jasmine.addMatchers({
	isValidPassword: function()
	{
		return{
		compare:function(actual)
		{
			return {
			pass:isValidUserPassword(actual)
			};	
		}
	   };	
		}
	});

    });

	it("Email should have @",function(){		
		expect("aameer9@gmail.com").isValidEmail();
		expect("aameer9gmail.com").not.isValidEmail();
	});

	it("Email should contain special symbols out of these (_.-)",function(){		
		expect("aameer.ausekar@gmail.com").isValidEmail();
		expect("aameer-ausekar@gmail.com").isValidEmail();
		expect("aameer_ausekar@gmail.com").isValidEmail();
		expect("aameer#ausekargmail.com").not.isValidEmail();
		expect("aameer^%gmail.com").not.isValidEmail();
		expect("aam!*er#ausekargmail.com").not.isValidEmail();
	});
	it("Password should be having at least one alphabet",function(){		
		expect("aameer9@").isValidPassword();
		expect("7-").not.isValidPassword();
		expect("954#").not.isValidEmail();
	});

	it("Password should be having at least one number",function(){		
		expect("aameer9@").isValidPassword();
		expect("john6%").isValidPassword();
		expect("mack").not.isValidPassword();
	});

	it("Password should be having at least one special symbol out of these (!.@#$%^&*()_)",function(){		
		expect("aameer9@").isValidPassword();
		expect("kitty$9").isValidPassword();
		expect("mack8").not.isValidPassword();
	});
});


