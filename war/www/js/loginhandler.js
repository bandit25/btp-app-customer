
$(document).ready(function(){

	
	$('#loginbutton').click(function(){		
	
		var number = $("#username").val();
		var password = $("#password").val();
		$.post("https://2-dot-btp-app.appspot.com/Login",
			   {number: number, 
			    password: password },
			   function(data,status,xhr){
				  if(xhr.getResponseHeader("AUTH")==1){
					  var json = JSON.parse(data);	
					  window.localStorage.setItem("user", json.number);
					  window.localStorage.setItem("username", json.name);
					  window.localStorage.setItem("useraddress", json.address);
					  window.localStorage.setItem("useremail", json.email);
					  window.location.href ="home.html";
			   }else{
				   alert(data);
			   }
			 }
			);	
	});
	
	$("#forgotpasswordbutton").click(function(){
		
		var user = $("#user").val();	
				$.ajax({  
					type: "POST",  
					url: "https://2-dot-btp-app.appspot.com/ForgotPassword",
					data: {user:user },
					success:function(data,status,xhr){
								if(data){
									alert(data);
								}else{
									alert(data);
								}  
	    					 }					
				}); 						
	});
	
	
});
        		