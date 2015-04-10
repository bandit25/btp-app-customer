$(document).ready(function(){

	function convert_tableto_json(){
		var itemslist = [];
		var $headers = $("th");
		var $rows = $("tbody tr").each(function(index) {
			$cells = $(this).find("td");
			itemslist[index] = {};
			$cells.each(function(cellIndex) {
			itemslist[index][$($headers[cellIndex]).html()] = $(this).html();
			});    
		});

		// Let's put this in the object like you want and convert to JSON
		var myObj = {};
		myObj.itemslist = itemslist;
		return JSON.stringify(myObj);
	
	}

	
	$('#placeorderbutton').click(function(){
				
		var user = window.localStorage.getItem("user");	
		var username = window.localStorage.getItem("username");	
		var list = convert_tableto_json();
		var deliveryno = "9876543210";
		var deliveryaddress = "DAIICT";
				$.ajax({  
					type: "POST",  
					url: "https://2-dot-btp-app.appspot.com/OrderHandler",
					data: {user:user,
						   username: username,
						   list: list,
						   deliveryno: deliveryno,
						   deliveryaddress: deliveryaddress,
						   action:"post"},
					success: function(data,status,xhr){
								if(xhr.getResponseHeader("AUTH")==1){
									alert(data);
								}else{
									alert(data);
								}  
	    					 }					
				}); 
	
	});
	
	$("#deleteorderbutton").click(function(){
		
		var orderid = "5644406560391168";
		
				$.ajax({  
					type: "POST",  
					url: "https://2-dot-btp-app.appspot.com/OrderHandler",
					data: {orderid: orderid,
						   action:"delete"},
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