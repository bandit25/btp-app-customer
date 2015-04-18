
$(document).ready(function(){
	
	var user = window.localStorage.getItem("user");
	$.ajax({  
		type: "GET",  
		url: "https://2-dot-btp-app.appspot.com/OrderHandler",
	//	url: "OrderHandler",
		data: {user:user},
		success:function(data,status,xhr){
					if(xhr.getResponseHeader("AUTH")==1){
						var json = JSON.parse(data);
						var jsonObj = JSON.parse(json.orderslist);
					//	console.log(json.nextPageToken);
						for(var obj in jsonObj){
							//console.log(jsonObj[obj]);
							var date = new Date(jsonObj[obj].timestamp);
							//console.log(date.toString());
							var data = JSON.parse(jsonObj[obj].list);
							var len = data.length;
			                var txt = "";
			                if(len > 0){
			                    for(var i=0;i<len;i++){
			                        if(data[i].Item && data[i].Quantity){
			                            txt += "<tr><td>"+data[i].Item+"</td><td>"+data[i].Quantity+"</td></tr>";
			                        }
			                    }
			                    if(txt != ""){
			                    //	console.log(txt);
			                    }
			                }
							if(jsonObj[obj].state==0){
					
							$("#orderData").append('<div class="row">\
														<div class="span5">\
															<h4 align="center"><a data-toggle="modal" data-target="#modal'+jsonObj[obj].id+'">Order '+jsonObj[obj].id+'</a></h4>\
															<div class="row bs-wizard" style="border-bottom:0;">\
																<div class="col-xs-3 bs-wizard-step complete">\
																	<div class="text-center bs-wizard-stepnum">Step 1</div>\
																	<div class="progress"><div class="progress-bar"></div></div>\
																	<a href="#" class="bs-wizard-dot"></a>\
																	<div class="bs-wizard-info text-center">Ordered</div>\
																</div>\
																<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
																	<div class="text-center bs-wizard-stepnum">Step 2</div>\
																	<div class="progress"><div class="progress-bar"></div></div>\
																	<a href="#" class="bs-wizard-dot"></a>\
																	<div class="bs-wizard-info text-center">Acknowledged</div>\
																</div>\
																<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
																	<div class="text-center bs-wizard-stepnum">Step 3</div>\
																	<div class="progress"><div class="progress-bar"></div></div>\
																	<a href="#" class="bs-wizard-dot"></a>\
																	<div class="bs-wizard-info text-center">Delivered</div>\
																</div>\
																<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
																	<div class="text-center bs-wizard-stepnum">Step 4</div>\
																	<div class="progress"><div class="progress-bar"></div></div>\
																	<a href="#" class="bs-wizard-dot"></a>\
																	<div class="bs-wizard-info text-center"> Completed</div>\
																</div>\
															</div>\
														</div>\
													</div>\
						<div class="text-center center-block">\
						<div class="modal fade" id="modal'+jsonObj[obj].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
								<div class="modal-dialog">\
									<div class="modal-content">\
										<div class="modal-header">\
											<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
											<h4 class="modal-title" id="myModalLabel">Order'+ jsonObj[obj].id +'</h4>\
										</div>\
										<div class="modal-body">\
											<div class="container">\
												<div class="row">\
													<div class="text-left">\
														<address>\
															<strong>Shipped To:</strong><br>\
																'+jsonObj[obj].customer_name+'<br>\
																'+jsonObj[obj].deliveryaddress+'<br>\
														</address>\
													</div>\
												</div>\
												<div class="row">\
													<div class="text-left">\
														<address>\
															<strong>Mobile Number</strong><br>\
															'+jsonObj[obj].deliveryno+'<br>\
														</address>\
													</div>\
													<div class="text-left">\
														<address>\
															<strong>Order Date:</strong><br>\
																'+ date.toString()+'<br><br>\
														</address>\
													</div>\
												</div>\
											</div>\
											<div class="row">\
												<div class="col-md-12">\
													<div class="panel panel-default">\
														<div class="panel-heading">\
															<h3 class="panel-title"><strong>Order summary</strong></h3>\
														</div>\
														<div class="panel-body">\
															<div class="table-responsive">\
																<table class="table table-condensed" id="table">\
																	<thead>\
																		<tr>\
																			<strong><th class="text-center">Item</th></strong>\
																			<strong><th class="text-center">Quantity</th></strong>\
																		</tr>\
																	</thead>\
																	<tbody>\
																		'+txt+'\
																	</tbody>\
																</table>\
															</div>\
														</div>\
													</div>\
												</div>\
											</div>\
											<div class="row bs-wizard" style="border-bottom:0;">\
												<div class="col-xs-3 bs-wizard-step complete">\
													<div class="text-center bs-wizard-stepnum">Step 1</div>\
													<div class="progress"><div class="progress-bar"></div></div>\
													<a href="#" class="bs-wizard-dot"></a>\
													<div class="bs-wizard-info text-center">Ordered</div>\
												</div>\
												<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
													<div class="text-center bs-wizard-stepnum">Step 2</div>\
													<div class="progress"><div class="progress-bar"></div></div>\
													<a href="#" class="bs-wizard-dot"></a>\
													<div class="bs-wizard-info text-center">Acknowledged</div>\
												</div>\
												<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
													<div class="text-center bs-wizard-stepnum">Step 3</div>\
													<div class="progress"><div class="progress-bar"></div></div>\
													<a href="#" class="bs-wizard-dot"></a>\
													<div class="bs-wizard-info text-center">Delivered</div>\
												</div>\
												<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
													<div class="text-center bs-wizard-stepnum">Step 4</div>\
													<div class="progress"><div class="progress-bar"></div></div>\
													<a href="#" class="bs-wizard-dot"></a>\
													<div class="bs-wizard-info text-center"> Completed</div>\
												</div>\
											</div>\
										</div>\
										<div class="modal-footer">\
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
										</div>\
									</div>\
								</div>\
							</div>\
						</div>'	);
								
				}else if(jsonObj[obj].state==1){
					$('#orderData').append('<div class="row">\
												<div class="span5">\
													<h4 align="center"><a data-toggle="modal" data-target="#modal'+jsonObj[obj].id+'">Order '+jsonObj[obj].id+'</a></h4>\
													<div class="row bs-wizard" style="border-bottom:0;">\
														<div class="col-xs-3 bs-wizard-step complete">\
															<div class="text-center bs-wizard-stepnum">Step 1</div>\
															<div class="progress"><div class="progress-bar"></div></div>\
															<a href="#" class="bs-wizard-dot"></a>\
															<div class="bs-wizard-info text-center">Ordered</div>\
														</div>\
														<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
															<div class="text-center bs-wizard-stepnum">Step 2</div>\
															<div class="progress"><div class="progress-bar"></div></div>\
															<a href="#" class="bs-wizard-dot"></a>\
															<div class="bs-wizard-info text-center">Acknowledged</div>\
														</div>\
														<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
															<div class="text-center bs-wizard-stepnum">Step 3</div>\
															<div class="progress"><div class="progress-bar"></div></div>\
															<a href="#" class="bs-wizard-dot"></a>\
															<div class="bs-wizard-info text-center">Delivered</div>\
														</div>\
														<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
															<div class="text-center bs-wizard-stepnum">Step 4</div>\
															<div class="progress"><div class="progress-bar"></div></div>\
															<a href="#" class="bs-wizard-dot"></a>\
															<div class="bs-wizard-info text-center"> Completed</div>\
														</div>\
													</div>\
												</div>\
											</div>\
				<div class="text-center center-block">\
					<div class="modal fade" id="modal'+jsonObj[obj].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
						<div class="modal-dialog">\
							<div class="modal-content">\
								<div class="modal-header">\
									<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
									<h4 class="modal-title" id="myModalLabel">Order '+jsonObj[obj].id+'</h4>\
								</div>\
								<div class="modal-body">\
									<div class="container">\
										<div class="row">\
											<div class="text-left">\
												<address>\
													<strong>Shipped To:</strong><br>\
													'+jsonObj[obj].customer_name+'<br>\
													'+jsonObj[obj].deliveryaddress+'<br>\
												</address>\
											</div>\
										</div>\
										<div class="row">\
											<div class="text-left">\
												<address>\
													<strong>Mobile Number</strong><br>\
													'+jsonObj[obj].deliveryno+'<br>\
												</address>\
											</div>\
											<div class="text-left">\
												<address>\
													<strong>Order Date:</strong><br>\
													'+ date.toString()+'<br><br>\
												</address>\
											</div>\
										</div>\
									</div>\
						<div class="row">\
							<div class="col-md-12">\
								<div class="panel panel-default">\
									<div class="panel-heading">\
										<h3 class="panel-title"><strong>Order summary</strong></h3>\
									</div>\
									<div class="panel-body">\
										<div class="table-responsive">\
											<table class="table table-condensed" id="mytable">\
												<thead>\
													<tr>\
														<strong><th class="text-center">Item</th></strong>\
														<strong><th class="text-center">Quantity</th></strong>\
													</tr>\
												</thead>\
												<tbody>\
													'+txt+'\
												</tbody>\
											</table>\
										</div>\
									</div>\
								</div>\
							</div>\
							<div class="row bs-wizard" style="border-bottom:0;">\
										<div class="col-xs-3 bs-wizard-step complete">\
											<div class="text-center bs-wizard-stepnum">Step 1</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Ordered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 2</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Acknowledged</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 3</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Delivered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
											<div class="text-center bs-wizard-stepnum">Step 4</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center"> Completed</div>\
										</div>\
							</div>\
						</div>\
					</div>\
							  <div class="modal-footer">\
								<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
							  </div>\
							</div>\
						</div>\
					</div>\
				</div>');	
					
								
								
							}else if(jsonObj[obj].state==2){
								$('#orderData').append('<div class="row">\
										<div class="span5">\
										<h4 align="center"><a data-toggle="modal" data-target="#modal'+jsonObj[obj].id+'">Order '+jsonObj[obj].id+'</a></h4>\
										<div class="row bs-wizard" style="border-bottom:0;">\
										<div class="col-xs-3 bs-wizard-step complete">\
											<div class="text-center bs-wizard-stepnum">Step 1</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Ordered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 2</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Acknowledged</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 3</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Delivered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
											<div class="text-center bs-wizard-stepnum">Step 4</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center"> Completed</div>\
										</div>\
										</div>\
									</div>\
								</div>\
							<div class="text-center center-block">\
							<div class="modal fade" id="modal'+jsonObj[obj].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
							<div class="modal-dialog">\
								<div class="modal-content">\
									<div class="modal-header">\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
										<h4 class="modal-title" id="myModalLabel">Order '+jsonObj[obj].id+'</h4>\
									</div>\
									<div class="modal-body">\
										<div class="container">\
											<div class="row">\
												<div class="text-left">\
													<address>\
													<strong>Shipped To:</strong><br>\
													'+jsonObj[obj].customer_name+'<br>\
													'+jsonObj[obj].deliveryaddress+'<br>\
												</address>\
											</div>\
										</div>\
										<div class="row">\
											<div class="text-left">\
												<address>\
													<strong>Mobile Number</strong><br>\
													'+jsonObj[obj].deliveryno+'<br>\
												</address>\
											</div>\
											<div class="text-left">\
												<address>\
													<strong>Order Date:</strong><br>\
													'+ date.toString()+'<br><br>\
												</address>\
											</div>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-md-12">\
											<div class="panel panel-default">\
												<div class="panel-heading">\
													<h3 class="panel-title"><strong>Order summary</strong></h3>\
												</div>\
												<div class="panel-body">\
													<div class="table-responsive">\
														<table class="table table-condensed" id="mytable">\
															<thead>\
																<tr>\
																	<strong><th class="text-center">Item</th></strong>\
																	<strong><th class="text-center">Quantity</th></strong>\
																</tr>\
															</thead>\
															<tbody>\
																'+txt+'\
															</tbody>\
														</table>\
													</div>\
												</div>\
											</div>\
										</div>\
										<div class="row bs-wizard" style="border-bottom:0;">\
													<div class="col-xs-3 bs-wizard-step complete">\
														<div class="text-center bs-wizard-stepnum">Step 1</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Ordered</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
														<div class="text-center bs-wizard-stepnum">Step 2</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Acknowledged</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
														<div class="text-center bs-wizard-stepnum">Step 3</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Delivered</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step disabled"><!-- disabled -->\
														<div class="text-center bs-wizard-stepnum">Step 4</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center"> Completed</div>\
													</div>\
										</div>\
									</div>\
								</div>\
										  <div class="modal-footer">\
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
										  </div>\
										</div>\
									</div>\
								</div>\
							</div>');	
								
																	
							}else if(jsonObj[obj].state==3){
								$('#orderData').append('<div class="row">\
										<div class="span5">\
										<h4 align="center"><a data-toggle="modal" data-target="#modal'+jsonObj[obj].id+'">Order '+jsonObj[obj].id+'</a></h4>\
										<div class="row bs-wizard" style="border-bottom:0;">\
										<div class="col-xs-3 bs-wizard-step complete">\
											<div class="text-center bs-wizard-stepnum">Step 1</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Ordered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 2</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Acknowledged</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
											<div class="text-center bs-wizard-stepnum">Step 3</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center">Delivered</div>\
										</div>\
										<div class="col-xs-3 bs-wizard-step complete"><!-- disabled -->\
											<div class="text-center bs-wizard-stepnum">Step 4</div>\
											<div class="progress"><div class="progress-bar"></div></div>\
											<a href="#" class="bs-wizard-dot"></a>\
											<div class="bs-wizard-info text-center"> Completed</div>\
										</div>\
										</div>\
									</div>\
								</div>\
							<div class="text-center center-block">\
							<div class="modal fade" id="modal'+jsonObj[obj].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
							<div class="modal-dialog">\
								<div class="modal-content">\
									<div class="modal-header">\
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
										<h4 class="modal-title" id="myModalLabel">Order '+jsonObj[obj].id+'</h4>\
									</div>\
									<div class="modal-body">\
										<div class="container">\
											<div class="row">\
												<div class="text-left">\
													<address>\
													<strong>Shipped To:</strong><br>\
													'+jsonObj[obj].customer_name+'<br>\
													'+jsonObj[obj].deliveryaddress+'<br>\
												</address>\
											</div>\
										</div>\
										<div class="row">\
											<div class="text-left">\
												<address>\
													<strong>Mobile Number</strong><br>\
													'+jsonObj[obj].deliveryno+'<br>\
												</address>\
											</div>\
											<div class="text-left">\
												<address>\
													<strong>Order Date:</strong><br>\
													'+ date.toString()+'<br><br>\
												</address>\
											</div>\
										</div>\
									</div>\
									<div class="row">\
										<div class="col-md-12">\
											<div class="panel panel-default">\
												<div class="panel-heading">\
													<h3 class="panel-title"><strong>Order summary</strong></h3>\
												</div>\
												<div class="panel-body">\
													<div class="table-responsive">\
														<table class="table table-condensed" id="mytable">\
															<thead>\
																<tr>\
																	<strong><th class="text-center">Item</th></strong>\
																	<strong><th class="text-center">Quantity</th></strong>\
																</tr>\
															</thead>\
															<tbody>\
																'+txt+'\
															</tbody>\
														</table>\
													</div>\
												</div>\
											</div>\
										</div>\
										<div class="row bs-wizard" style="border-bottom:0;">\
													<div class="col-xs-3 bs-wizard-step complete">\
														<div class="text-center bs-wizard-stepnum">Step 1</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Ordered</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
														<div class="text-center bs-wizard-stepnum">Step 2</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Acknowledged</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step complete"><!-- complete -->\
														<div class="text-center bs-wizard-stepnum">Step 3</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center">Delivered</div>\
													</div>\
													<div class="col-xs-3 bs-wizard-step complete"><!-- disabled -->\
														<div class="text-center bs-wizard-stepnum">Step 4</div>\
														<div class="progress"><div class="progress-bar"></div></div>\
														<a href="#" class="bs-wizard-dot"></a>\
														<div class="bs-wizard-info text-center"> Completed</div>\
													</div>\
										</div>\
									</div>\
								</div>\
										  <div class="modal-footer">\
											<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
										  </div>\
										</div>\
									</div>\
								</div>\
							</div>');				
								
							}
								
							
						}

					}else{
						alert("data");
					}  
				 }					
	}); 						


	$("#logout").click(function(){
		
			window.localStorage.setItem("user", null);
			window.localStorage.setItem("username", null);
			window.localStorage.setItem("useraddress", null);
			window.localStorage.setItem("useremail", null);
			window.location.href= "index.html";	
			
		});
	
	/*$("#deleteorderbutton").click(function(){
		console.log("abc");
			$.ajax({  
				type: "POST",  
				//url: "https://2-dot-btp-app.appspot.com/OrderHandler",
				url: "Orderhandler",
				data: {orderid: id,
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
			*/

			
});