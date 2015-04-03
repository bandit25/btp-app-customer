
$(document).ready(function(){

	$("#logoutbutton").click(function(){
		
		var user = window.localStorage.getItem("user");
		if(user==null){
			alert("Login first");
		}else{		
			window.localStorage.setItem("user", null);
			window.localStorage.clear();
			window.location.replace("/index.html");	
		}
		
	});
	
	
	
	$("#getordersbutton").click(function(){
		
		var user = window.localStorage.getItem("user");
			if(user==null){
				alert("Login first");
			}else{
				
				$.ajax({  
					type: "GET",  
					url: "OrderHandler",
					data: {user:user },
					success:function(data,status,xhr){
								if(xhr.getResponseHeader("AUTH")==1){
									var json = JSON.parse(data);
									var cursorstring = json.nextPageToken;
									alert(json.orderlist);
								}else{
									alert("error");
								}  
	    					 }					
				}); 						
			}
	 });
	
	$("#placeorderbutton").click(function(){
		
		var user = window.localStorage.getItem("user");
			if(user==null){
				alert("Login first");
			}else{
				
				$.ajax({  
					type: "POST",  
					url: "OrderHandler",
					data: { user: user,
						    list: "milk 1l",
						    deliveryno: "99999",
						    deliveryaddress: "daiict"},
					success:function(data,status,xhr){
								if(data){
									alert(data);
								}else{
									alert(data);
								}  
	    					 }					
				}); 						
			}
	 });

});