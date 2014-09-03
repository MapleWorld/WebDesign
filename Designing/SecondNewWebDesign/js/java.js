$(document).ready(function() {

	$(".menu-pic-item").fadeTo(0 ,0.3);
	
	var myTimeout;

	$(".menu-pic-item").hover(function(){
			$(this).fadeTo("slow", 1);
	});
  
	$(".menu-pic-item").mouseout(function(){
		$(this).fadeTo("slow", 0.3);
	});


	//Modal Trigger Function Call
	$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
	
	$(function(){
		$("#modal_trigger").click(function(){
			$(".user_contact").load("contact.php");
			return false;
		});
	});

});



/*
	var overlay = $("<div id='lean_overlay'>Test</div>");
	$("body").append(overlay);

	function testModal(htmlPage, formID, triggerID){

		var dlg=$(formID).dialog({
			resizable: false,
			autoOpen: false,
			height: 400,
		});
		
		$(dlg).load(htmlPage, function(){
			 dlg.dialog('open');
		});
	}
	

	$(document).ready(function() { 
		//$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
		/*
		 var dlg=$('#contactform').dialog();
		 $('#modal_trigger').click(function(e) {
			 dlg.load('contact.html', function(){
				 dlg.dialog('open');
			 });
		  }); 
	}); 
*/

