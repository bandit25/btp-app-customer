
$(document).ready(function(){

	$("#logout").click(function(){
		
			window.localStorage.setItem("user", null);
			window.localStorage.setItem("username", null);
			window.localStorage.setItem("useraddress", null);
			window.localStorage.setItem("useremail", null);
			window.location.href= "index.html";	
			
		});
			
	
	$("#getplacedorders").click(function(){
		
		var user = window.localStorage.getItem("user");
			if(user==null){
				window.location.href= "index.html";	
			}else{
				
				$.ajax({  
					type: "GET",  
					url: "https://2-dot-btp-app.appspot.com/OrderHandler",
					data: {user:user },
					success:function(data,status,xhr){
								if(xhr.getResponseHeader("AUTH")==1){
									var json = JSON.parse(data);
									var cursorstring = json.nextPageToken;
									alert(json.orderslist);
									window.location.href="orderslist.html";
								}else{
									alert("Error. Please Try Again");
								}  
	    					 }					
				}); 						
			}
	 });
	
});