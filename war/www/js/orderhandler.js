$(document).ready(function(){
	
	function convert_tableto_json(){		
		
		var itemslist = [];
		var $headers = $("th");
		$('#mytable tbody tr').each( function(index){
			itemslist[index] = {};
			$(this).closest('tr').find("input[type=text]").each(function(cellindex) {
			     itemslist[index][$($headers[cellindex+1]).html()] = this.value ;
			});
		});			
		// Let's put this in the object like you want and convert to JSON
		var myObj = {};
		myObj.itemslist = itemslist;
		return JSON.stringify(itemslist);	
	}

	
	 $('#placeorderbutton').click(function(){				
		var user =window.localStorage.getItem("user");
		var username = $("#customer_name").val() ;	
		var list = convert_tableto_json();
		var deliveryno = $("#deliveryno").val() ; ;
		var deliveryaddress = $("#deliveryaddress").val() ;;
				$.ajax({  
					type: "POST",  
					url: "https://2-dot-btp-app.appspot.com/OrderHandler",
					//url: "OrderHandler",
					data: {user:user,
						   username: username,
						   list: list,
						   deliveryno: deliveryno,
						   deliveryaddress: deliveryaddress,
						   action:"post"},
					success: function(data,status,xhr){
								if(xhr.getResponseHeader("AUTH")==1){
									alert(data);
									window.localStorage.removeItem('sharedTable');
									window.location.href ="home.html";
								}else{
									alert(data);
								}  
	    					 }					
				}); 
	
		});
	
	
});