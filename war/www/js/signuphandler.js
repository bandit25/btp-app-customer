
$(document).ready(function(){

	$("#registerbutton").click(function(){
		
		if($('#regform')[0].checkValidity()){
			
			$.post("https://2-dot-btp-app.appspot.com/Register",
					//"Register",
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
			$('#regform :input:visible[required="required"]').each(function(index)
					{
					    if(!this.validity.valid)
					    {
					    	
					        $(this).focus();
					        // break
					      if(index==0){
					    	  $("#err_name").show();
					    	  $("#err_mobile").hide();
					    	  $("#err_email").hide();
					    	  $("#err_address").hide();
					    	  $("#err_password").hide();
					    	  $("#err_repassword").hide();
					      }else if(index==1){
					    	  $("#err_name").hide();
					    	  $("#err_mobile").show();
					    	  $("#err_email").hide();
					    	  $("#err_address").hide();
					    	  $("#err_password").hide();
					    	  $("#err_repassword").hide();
					      }else if(index==2){
					    	  $("#err_name").hide();
					    	  $("#err_mobile").hide();
					    	  $("#err_email").show();
					    	  $("#err_address").hide();
					    	  $("#err_password").hide();
					    	  $("#err_repassword").hide();
					      }else if(index==3){
					    	  $("#err_name").hide();
					    	  $("#err_mobile").hide();
					    	  $("#err_email").hide();
					    	  $("#err_address").show();
					    	  $("#err_password").hide();
					    	  $("#err_repassword").hide();
					      }else if(index==4){
					    	  $("#err_name").hide();
					    	  $("#err_mobile").hide();
					    	  $("#err_email").hide();
					    	  $("#err_address").hide();
					    	  $("#err_password").show();
					    	  $("#err_repassword").hide();
					      }else if(index==5){
					    	  $("#err_name").hide();
					    	  $("#err_mobile").hide();
					    	  $("#err_email").hide();
					    	  $("#err_address").hide();
					    	  $("#err_password").hide();
					    	  $("#err_repassword").show();
					      }
					        return false;
					    }
					});
		}
		
	});
	
	
});

