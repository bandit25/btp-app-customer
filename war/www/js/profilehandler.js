
$(document).ready(function(){

	
	$('#updateprofilebutton').click(function(){
		
		var number = window.localStorage.getItem("user");
		var name = $("#name").val();
		var email = $("#email").val();
		var address = $("#address").val();
		$.post("https://2-dot-btp-app.appspot.com/EditProfile",
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
			   }else{
				   alert(data);
			   }
			 }
			);	
	});
	
	$("#changepasswordbutton").click(function(){
		
		var number = window.localStorage.getItem("user");
		var password = $("#password").val();	
				$.ajax({  
					type: "POST",  
					url: "https://2-dot-btp-app.appspot.com/EditProfile",
					data: {number:number,
						   password: password,
						   state : 1},
					success: function(data,status,xhr){
								if(xhr.getResponseHeader("AUTH")==1){
									alert(data);
								}else{
									alert(data);
								}  
	    					 }					
				}); 						
	});
	
	
});
        		