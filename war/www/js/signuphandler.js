
$(document).ready(function(){

	$("#registerbutton").click(function(){
		$.post("Register",
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
						  window.location.replace("/home.html");
					}else{
					   alert(data);
					}
			 }	
		);
		
	});
});

