
$(document).ready(function(){

	$("#registerbutton").click(function(){
		
		if($('#regform')[0].checkValidity()){
			
			$.post("https://2-dot-btp-app.appspot.com/Register",
				   {name : $("#name").val() ,
					number : $("#mobile").val() ,
					address: $("#address").val() ,
					email : $("#email").val() ,
					password: $("#password").val() },
					function(data,status,xhr){
						if(xhr.getResponseHeader("AUTH")==1){
					   	  	var json = JSON.parse(data);						 
					   	  	window.localStorage.setItem("user", json.number);
					   	  	window.localStorage.setItem("username", json.name);
					   	  	window.localStorage.setItem("useraddress", json.address);
					   	  	window.localStorage.setItem("useremail", json.email);		
					   	  	window.location.href = "home.html";
						}else{
							alert(data);
						}
					}	
			);
		}else{
			
			event.preventDefault();
			$('#regform :input:visible[required="required"]').each(function()
					{
					    if(!this.validity.valid)
					    {
					    	
					        $(this).focus();
					        // break
					      //alert($('#password').attr("title"));
					        return false;
					    }
					});
		}
		
	});
	
	
});

