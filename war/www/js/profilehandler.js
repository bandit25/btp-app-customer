
$(document).ready(function(){
	
	$('#updateprofilebutton').click(function(){
		
		if($('#updateprofileform')[0].checkValidity()){
			
					var number = window.localStorage.getItem("user");
					var name = $("#name").val();
					var email = $("#email").val();
					var address = $("#address").val();
					$.post("https://2-dot-btp-app.appspot.com/EditProfile",
							//"EditProfile",
						   {number: number,
							name: name, 
						    email: email, 
							address: address,
							state : 0},
						   function(data,status,xhr){
							  if(xhr.getResponseHeader("AUTH")==1){
								  var json = JSON.parse(data);	
								  window.localStorage.setItem("username", json.name);
								  window.localStorage.setItem("useraddress", json.address);
								  window.localStorage.setItem("useremail", json.email);
								  alert(json.message);
								  window.location.href="profile.html";
						   }else{
							   alert(data);
						   }
						 }
						);	
		}else{
			
			event.preventDefault();
			
			$('#updateprofileform :input:visible[required="required"]').each(function(index)
					{
					    if(!this.validity.valid)
					    {
					    	$(this).focus();
					    	
					    	if(index==0){
						    	  $("#err_name").show();
						    	  $("#err_email").hide();
						    	  $("#err_address").hide();
						    	 
						      }else if(index==1){
						    	  $("#err_name").hide();
						    	  $("#err_email").show();
						    	  $("#err_address").hide();
						    	  
						      }else if(index==2){
						    	  $("#err_name").hide();						    	
						    	  $("#err_email").hide();
						    	  $("#err_address").show();
						      }						      				        
					        return false;
					    }
					    
					});
			
			}
	});
	
		$("#changepasswordbutton").click(function(){
			
			if($('#updatepassform')[0].checkValidity()){
				
					var number = window.localStorage.getItem("user");
					var password = $("#password").val();	
							$.ajax({  
								type: "POST",  
								url: "https://2-dot-btp-app.appspot.com/EditProfile",
								//url: "EditProfile",
								data: {number:number,
									password: password,
									state : 1},
									success: function(data,status,xhr){
											if(xhr.getResponseHeader("AUTH")==1){
												alert(data);
												window.location.href="profile.html";
											}else{
												alert(data);
											}  
			    					 	}					
							});
			 }else{
				 
				 event.preventDefault();
				 
				 $('#updatepassform :input:visible[required="required"]').each(function(index)
							{
							    if(!this.validity.valid)
							    {
							    	$(this).focus();
							    	
							    	if(index==0){
							    		 $("#err_password").show();
								    	 $("#err_repassword").hide();
								    	
							    	}else if(index==1){
							    		console.log("error");
							    		 $("#err_password").hide();
								    	 $("#err_repassword").show();	
							    	}        
							        
							        return false;
							    }
							    
							});					
				
			 	}			
		});
	
});
        		