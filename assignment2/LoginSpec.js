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

	it("Password should be having one alphabet, number and a special character.",function(){		
		expect("qjhv4_").isValidPassword();
	});
});


